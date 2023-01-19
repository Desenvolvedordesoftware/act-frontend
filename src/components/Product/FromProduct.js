import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  max-width: 1900px;
  max-height: 1900px;
  align-items: flex-end;
  margin: 1px;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 5px;
  align-items: center;
  position: relative;
  background-color: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Input = styled.input`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  font-size: 15px;
`;

const Select = styled.select`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  font-size: 15px;
`;

const Label = styled.label``;

const Button = styled.button`
  width: 85px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 52px;
  font-size: 15px;
`;

const FromProduct = ({ getProduct, onEdit, setOnEdit }) => {
  const ref = useRef();
 // const [fromCompany, setFromCompany] = useState(false)

 // const showFromCompany = () => setFromCompany(!fromCompany)

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.codbarra.value = onEdit.codbarra;
      user.produto.value = onEdit.produto; 
      user.unidade.value = onEdit.unidade;
      user.codgrupo.value = onEdit.codgrupo
      user.codsubgrupo.value = onEdit.codsubgrupo;
      user.codfornecedor.value = onEdit.codfornecedor; 
      user.precocusto.value = onEdit.precocusto;
      user.precovenda.value = onEdit.precovenda;
      user.classificacao_fiscal_ncm.value = onEdit.classificacao_fiscal_ncm;
      user.cest.value = onEdit.cest;
      user.estoqueminimo.value = onEdit.estoqueminimo;
      user.estoque.value = onEdit.estoque;
      user.aliquota.value = onEdit.aliquota;
      user.ind_cfop_venda_dentro.value = onEdit.ind_cfop_venda_dentro;
      user.cst.value = onEdit.cst;
      user.csosn.value = onEdit.csosn;
      user.data_cadastro.value = onEdit.data_cadastro;
      user.tipo.value = onEdit.tipo;
      user.situacao.value = onEdit.situacao;
      user.comissao.value = onEdit.comissao;
      user.margem_agregada.value = onEdit.margem_agregada;
      user.empresa.value = onEdit.empresa;
      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.codbarra.value) {
      return toast.warn("Campo Cód.Barra não pode ser vazio!");
    }
    if (!user.produto.value) {
      return toast.warn("Campo Produto não pode ser vazio!");
    }
    if (!user.unidade.value) {
      return toast.warn("Campo Unidade não pode ser vazio!");
    }
    if (!user.codgrupo.value) {
      return toast.warn("Campo Grupo não pode ser vazio!");
    }
    if (!user.codsubgrupo.value) {
      return toast.warn("Campo SubGrupo não pode ser vazio!");
    }
    if (!user.codfornecedor.value) {
      return toast.warn("Campo Fornecedor não pode ser vazio!");
    }
    if (!user.precocusto.value) {
      return toast.warn("Campo Preço custo não pode ser vazio!");
    }
    if (!user.precovenda.value) {
      return toast.warn("Campo Preço venda não pode ser vazio!");
    }
    if (!user.classificacao_fiscal_ncm.value) {
      return toast.warn("Campo Preço NCM não pode ser vazio!");
    }
    if (!user.cest.value) {
      return toast.warn("Campo Preço CEST não pode ser vazio!");
    }
    if (!user.estoqueminimo.value) {
      return toast.warn("Campo Estoque mínimo não pode ser vazio!");
    }
    if (!user.estoque.value) {
      return toast.warn("Campo Estoque atual não pode ser vazio!");
    }
    if (!user.aliquota.value) {
      return toast.warn("Campo ICMS não pode ser vazio!");
    }
    if (!user.ind_cfop_venda_dentro.value) {
      return toast.warn("Campo CFOP não pode ser vazio!");
    }
    if (!user.cst.value) {
      return toast.warn("Campo CST não pode ser vazio!");
    }
    if (!user.csosn.value) {
      return toast.warn("Campo CSOSN não pode ser vazio!");
    }
    if (!user.data_cadastro.value) {
      return toast.warn("Campo Data de cadastro não pode ser vazio!");
    }
    if (!user.tipo.value) {
      return toast.warn("Campo Tipo não pode ser vazio!");
    }
    if (!user.situacao.value) {
      return toast.warn("Campo Situação não pode ser vazio!");
    }
    if (!user.comissao.value) {
      return toast.warn("Campo Comissão não pode ser vazio!");
    }
    if (!user.margem_agregada.value) {
      return toast.warn("Campo Margem % não pode ser vazio!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/Product/" + onEdit.id, {
          codbarra: user.codbarra.value,
          produto: user.produto.value, 
          unidade: user.unidade.value,
          codgrupo: user.codgrupo.value,
          codsubgrupo: user.codsubgrupo.value,
          codfornecedor: user.codfornecedor.value, 
          precocusto: user.precocusto.value,
          precovenda: user.precovenda.value,
          classificacao_fiscal_ncm: user.classificacao_fiscal_ncm.value,
          cest: user.cest.value,
          estoqueminimo: user.estoqueminimo.value,
          estoque: user.estoque.value,
          aliquota: user.aliquota.value,
          ind_cfop_venda_dentro: user.ind_cfop_venda_dentro.value,
          cst: user.cst.value,
          csosn: user.csosn.value,
          data_cadastro: user.data_cadastro.value,
          tipo: user.tipo.value,
          situacao: user.situacao.value,
          comissao: user.comissao.value,
          margem_agregada: user.margem_agregada.value,
          empresa: user.empresa.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/Product", {
          codbarra: user.codbarra.value,
          produto: user.produto.value, 
          unidade: user.unidade.value,
          codgrupo: user.codgrupo.value,
          codsubgrupo: user.codsubgrupo.value,
          codfornecedor: user.codfornecedor.value, 
          precocusto: user.precocusto.value,
          precovenda: user.precovenda.value,
          classificacao_fiscal_ncm: user.classificacao_fiscal_ncm.value,
          cest: user.cest.value,
          estoqueminimo: user.estoqueminimo.value,
          estoque: user.estoque.value,
          aliquota: user.aliquota.value,
          ind_cfop_venda_dentro: user.ind_cfop_venda_dentro.value,
          cst: user.cst.value,
          csosn: user.csosn.value,
          data_cadastro: user.data_cadastro.value,
          tipo: user.tipo.value,
          situacao: user.situacao.value,
          comissao: user.comissao.value,
          margem_agregada: user.margem_agregada.value,
          empresa: user.empresa.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.codbarra.value = "";
    user.produto.value = ""; 
    user.unidade.value = "";
    user.codgrupo.value = "";
    user.codsubgrupo.value = "";
    user.codfornecedor.value = ""; 
    user.precocusto.value = "";
    user.precovenda.value = "";
    user.classificacao_fiscal_ncm.value = "";
    user.cest.value = "";
    user.estoqueminimo.value = "";
    user.estoque.value = "";
    user.aliquota.value = "";
    user.ind_cfop_venda_dentro.value = "";
    user.cst.value = "";
    user.csosn.value = "";
    user.data_cadastro.value = "";
    user.tipo.value = "";
    user.situacao.value = "";
    user.comissao.value = "";
    user.margem_agregada.value = "";

    setOnEdit(null);
    getProduct();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit} >
      <InputArea>
        <Label>Tipo</Label>
        <Select style={{width: "220px"}} name="tipo">
          <option value={1}>Mercadoria para Revenda</option>
          <option value={2}>Serviço</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>Data</Label>
        <Input style={{width: "120px"}} name="data_cadastro" type="date" />
      </InputArea>
      <InputArea>
        <Label>Cód.Barras</Label>
        <Input style={{width: "160px"}} name="codbarra"/>
      </InputArea>
      <InputArea>
        <Label>Unidade</Label>
        <Select style={{width: "70px"}} name="unidade">
          <option value={1}>UN</option>
          <option value={1}>PC</option>
          <option value={1}>LT</option>
        </Select>
      </InputArea>
      <InputArea>
        <Label>Situação</Label>
        <Select style={{width: "100px"}} name="situacao">
          <option value={1}>Ativo</option>
          <option value={2}>Inativo</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>Produto</Label>
        <Input style={{width: "350px"}} name="produto"/>
      </InputArea>
      <InputArea>
        <Label>Grupo</Label>
        <Select style={{width: "181px"}} name="codgrupo">
          <option value={1}>DIVERSOS</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>Subgrupo</Label>
        <Select style={{width: "181px"}} name="codsubgrupo">
          <option value={1}>GERAL</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>Fornecedor</Label>
        <Select style={{width: "372px"}} name="codfornecedor">
          <option value={1}>DISTRIBUIDORA</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>Preço de custo</Label>
        <Input style={{width: "102px"}} name="precocusto" />
      </InputArea>
      <InputArea>
        <Label>Margem %</Label>
        <Input style={{width: "80px"}} name="margem_agregada" />
      </InputArea>
      <InputArea>
        <Label>Preço de venda</Label>
        <Input style={{width: "102px"}} name="precovenda" />
      </InputArea>
      <InputArea>
        <Label>Comissão %</Label>
        <Input style={{width: "75px"}} name="comissao" />
      </InputArea>
      <InputArea>
        <Label>Estoque mínimo</Label>
        <Input style={{width: "102px"}} name="estoqueminimo" />
      </InputArea>
      <InputArea>
        <Label>Estoque atual</Label>
        <Input style={{width: "102px"}} name="estoque" />
      </InputArea>
      <InputArea>
        <Label>NCM</Label>
        <Input style={{width: "102px"}} name="classificacao_fiscal_ncm" />
      </InputArea>
      <InputArea>
        <Label>CEST</Label>
        <Input style={{width: "102px"}} name="cest" />
      </InputArea>
      <InputArea>
        <Label>ICMS</Label>
        <Input style={{width: "80px"}} name="aliquota" />
      </InputArea>
      <InputArea>
        <Label>CFOP</Label>
        <Select style={{width: "100px"}} name="ind_cfop_venda_dentro">
          <option value={1}>5102</option>
          <option value={2}>5405</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>CST</Label>
        <Select style={{width: "100px"}} name="cst">
          <option value={1}>000</option>
          <option value={2}>060</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>CSOSN</Label>
        <Select style={{width: "100px"}} name="csosn">
          <option value={1}>102</option>
          <option value={2}>500</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>Empresa</Label>
        <Select style={{width: "370px"}} name="empresa">
          <option value={1}>MATRIZ</option>
        </Select>  
      </InputArea>
      <InputArea>
       <Button type="submit" >SALVAR</Button>
      </InputArea>
      
    </FormContainer>
    
  );
};

export default FromProduct;