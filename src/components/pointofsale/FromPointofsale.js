import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import { StyledEngineProvider } from '@mui/material/styles';

import { IdEmpresa } from "../Dashboard/Sidebar";
import { nv } from "../../pages/PointOfSale/PonitOfSale";
import ModalFec from './ModalFec'

const FormContainer = styled.form`
  display: flex;
  width: 308px;
  height: 540px;
  align-items: flex-end;
  margin: 5px;
  padding: 5px;
  gap: 15px;
  flex-wrap: wrap;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    cursor: pointer;
    
  }
`;

const InputArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  
`;

const InputArea1 = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  align-items: flex-start;
  gap: 1px;
  flex-direction: column;
  font-size: 10px;
  
`;

const Input = styled.input`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  color: #2c73d2;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    
  }
`;


const Label = styled.label``;

const Button = styled.button`
  width: 300px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 1px;
  margin-top: -18px;
  left: -100%;
  font-size: 2px;
`;



const Select = styled.select`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  color: #022025;
  background-color: #fff;
  border: 1px solid #02b3d4;
  border-radius: 5px;
  height: 30px;
  font-size: 12px;
   &:hover {
    cursor: pointer;
    
  }
`;

var Qtde_Itens = 0;
var Total_Geral = 0;
export const Total_venda = Total_Geral;
var RestVenda = null;
export var CodVenda = 1;
export var CodCaixa = 1;
var Qtde = 1;
var Unitario = '0,00';
export var Codvendedor = 1;
var NomeProduto = '';



const FromPointofsale = ({ getPointofsale, onEdit, setOnEdit}) => {
  const ref = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.produto.value) {
      return toast.warn("Produto não pode ser vazio!");
    }
    if (!user.qtde.value) {
      return toast.warn("Quantidade não pode ser vazio!");
    }
    if (!user.unitario.value) {
      return toast.warn("Valor unitário não pode ser vazio!");
    }
   
    if (user.codvendedor.value === '0') {
      return toast.warn("Faltou selecionar o operador!");
    }
    
    if (onEdit) {
     /* */
      
      } else {

        var Codproduto = user.produto.value;
        var Codbarra = '';
        var Produto = '';
        var Unidade = '';   
        var Aliquota = '';  
        var Cst = '';  
        var Tipo = '';
        var Csosn = '';
        var Ncm = '';
        var Peso = '';
        var Precocusto = '';
        var Status ='';

        try {
          const res = await axios.get("http://localhost:8800/productcodbarra/" + Codproduto);
             
           if (res.data.length === 0) {
             return toast.warn("Código / Cód.Barra do produto incorreto ou não cadastrado!");
            } else {  
              var lista = [];

              console.log(res.data)
    
              res.data.map((dados) => {
                lista.push(
                  [(dados.id),
                    
                  ]
                )
                Codbarra = dados.codbarra;
                Produto = dados.produto;
                Unidade = dados.unidade;
                Aliquota = dados.aliquota;
                Cst = dados.cst;
                Tipo = dados.tipo;
                Csosn = dados.csosn;
                Ncm = dados.classificacao_fiscal_ncm;
                Peso = dados.peso;
                Precocusto = dados.precocusto;
                Status =dados.status;
                Unitario = dados.precovenda;
                NomeProduto = dados.produto;
              })
            }
            } catch (error) {
            toast.error(error);
        } 

      
        //variaveis  
      user.unitario.value = Unitario;
      Qtde = user.qtde.value;
      var Total = Unitario*Qtde;
      Total_Geral = parseFloat(+Total_Geral)+(+Total);
      var Data = new Date().toLocaleDateString();
      var Codcliente = '1';
      var Desconto = '0';
      var Movimento = '1';
      Codvendedor = user.codvendedor.value;
      var Situacao = 'O';
      var Base_calculo = Total;
      var Valor_icms = Base_calculo * Aliquota / 100;
      var Caixa = CodCaixa;
      Qtde_Itens = parseFloat(+Qtde_Itens)+(+1);
      var Id_item = Qtde_Itens;
      var Movimento_estoque ='-' + Qtde;
      var Loja = '1';
      var Codusuario = '1';
      var Empresa = IdEmpresa;
      var Nfce = 'N';
      var Nfe = 'N';  

      try {
        const res = await axios.get("http://localhost:8800/sale/" +nv);
         
         if (res.data.length === 0) {
            RestVenda = res.data.length;
            CodVenda = nv;
          } else {
            RestVenda = 1;
                 }
      } catch (error) {
          toast.error(error);} 
       

     if (RestVenda === 0) {
      await axios
        .post("http://localhost:8800/Sale", {

          codvenda: CodVenda,
          codcaixa: Caixa,
          codvendedor: Codvendedor,
          hora: new Date().toLocaleTimeString(),
          data: Data,
          codcliente: Codcliente,
          obs: 'obs',
          meiopagamento: 'DINHEIRO',
          subtotal: Total_Geral.toFixed(2),
          desconto: null,
          total: Total_Geral.toFixed(2),
          totalpago: Total_Geral.toFixed(2),
          troco: null,
          numerofiscal: null,
          retirado: null,
          situacao: 'O',
          contingencia: 'N',
          gerado_nfce: 'N',
          gerado_nfe: 'N',
          chave: null,
          xml: null,
          idempresa: IdEmpresa,
          local_doc_fiscal: null,
        });

      } else {

        await axios
        .put("http://localhost:8800/Sale/" + CodVenda, {

          codvenda: CodVenda,
          codcaixa: Caixa,
          codvendedor: Codvendedor,
          hora: new Date().toLocaleTimeString(),
          data: Data,
          codcliente: Codcliente,
          obs: 'obs',
          meiopagamento: 'DINHEIRO',
          subtotal: Total_Geral.toFixed(2),
          desconto: null,
          total: Total_Geral.toFixed(2),
          totalpago: Total_Geral.toFixed(2),
          troco: null,
          numerofiscal: null,
          retirado: null,
          situacao: 'O',
          contingencia: 'N',
          gerado_nfce: 'N',
          gerado_nfe: 'N',
          chave: null,
          xml: null,
          idempresa: IdEmpresa,
          local_doc_fiscal: null,
        });

      }
          await axios
          .post("http://localhost:8800/Saleitems", {
  
            codnota: CodVenda,
            codproduto: Codproduto,
            unitario: Unitario,
            total: Total,
            qtde: Qtde,
            data: Data,
            codcliente: Codcliente,
            desconto: Desconto,
            movimento: Movimento,
            codvendedor: Codvendedor,
            unidade: Unidade,
            situacao: Situacao,
            valor_icms: Valor_icms,
            base_calculo: Base_calculo,
            caixa: Caixa,
            id_item: Id_item,
            aliquota: Aliquota,
            cst: Cst,
            movimento_estoque: Movimento_estoque,
            codbarra: Codbarra,
            produto: Produto,
            loja: Loja,
            tipo: Tipo,
            codusuario: Codusuario,
            empresa: Empresa,
            csosn: Csosn,
            nfce: Nfce,
            nfe: Nfe,
            ncm: Ncm,
            peso: Peso,
            precocusto: Precocusto,
            status: Status
          });          

        }
    
     user.produto.value = ""; 
     user.qtde.value = 1; 
     user.unitario.value = "0,00"; 
     user.produto.focus();

    setOnEdit(null);
    getPointofsale();
  };


  return (
  <div>  
    <FormContainer ref={ref} onSubmit={handleSubmit} >
      <InputArea1 style={{color:"#2c73d2", fontSize: "12px"}}>
        <Label >Chave da venda .: {CodVenda}</Label>
        <Label >Operador .:</Label>
        <Select style={{width: "280px"}} name="codvendedor">
          <option value={0}>Selecionar operador</option>
          <option value={1}>ANGEL MIX</option>
          <option value={2}>WILSON BRITO</option>
        </Select>  
        <Label >Cliente .: Consumidor final</Label>
        <Label >Caixa .: {CodCaixa}</Label>
      </InputArea1> 
      <InputArea>
       <Button></Button>
       <Label style={{color:"#2c73d2", fontSize: "12px"}}>Descrição .:</Label>
       <Label style={{color:"#2c73d2", fontSize: "15px"}}>{NomeProduto}</Label>
      </InputArea>
      <InputArea>
        <Label style={{color:"#2c73d2", fontSize: "18px"}}>Código / Cód.Barra</Label>
        <Input formControlName="sGPTypeDeliveryId" placeholder="Apenas números!" class="form-control" required="required" type="number" min="1" max="99999999999999" style={{width: "280px", fontSize: "16px"}} name="produto"/>
      </InputArea>
      <InputArea>
        <Label style={{color:"#2c73d2", fontSize: "18px"}}>Quantidade</Label>
        <Input formControlName="sGPTypeDeliveryId" placeholder="Apenas números!" class="form-control" required="required" type="number" pattern="[0-9]+([,\.][0-9]+)?" min="0,1" max="9999" step="any" style={{width: "280px", fontSize: "16px"}} name="qtde" />
      </InputArea>
      <InputArea>
        <Label style={{color:"#2c73d2", fontSize: "18px"}}>Valor unitário</Label>
        <Input formControlName="sGPTypeDeliveryId" placeholder="Apenas números!" class="form-control" required="required" type="number" pattern="[0-9]+([,\.][0-9]+)?" max="99999" step="any" style={{width: "280px", fontSize: "16px"}} name="unitario" />
      </InputArea>
      <InputArea  style={{color:"#2c73d2", fontSize: "22px"}}>
        <Label >Total R$ .: {Total_Geral.toFixed(2)}</Label>
        <Label >Itens .: {Qtde_Itens}</Label>
     </InputArea>
      <InputArea>
       <Button type="submit" >SALVAR</Button>
      </InputArea> 
      <InputArea1 style={{color:"#2c73d2", fontSize: "12px", gap:"1px" }}>
       <StyledEngineProvider injectFirst>
        <ModalFec onEdit={onEdit} setOnEdit={setOnEdit} getPointofsale={getPointofsale}/>
       </StyledEngineProvider>
    </InputArea1>
    </FormContainer>
  </div>  
  );
};

export default FromPointofsale;