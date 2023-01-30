import React, {useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from "axios";
import { toast } from "react-toastify";

import {nv} from "../../pages/PointOfSale/PonitOfSale";
import { url } from "../../components/Function/Function";


const StyleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  pt: 1,
  px: 1,
  pb: 1,

  height: 440,
  backgroundColor: '#fff',
  borderRadius: '5px',
  fontSize: '12px',
  background: '#fff',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(5.5px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  cursor: 'pointer',
};

const Formprinc = styled.form`
display: flex;
gap: 10px;
`;

const Button1 = styled.button`
  width: 290px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 52px;
  font-size: 15px;
`;

export const ModalFinalizarVenda = styled.form`
  display: flex;
  width: 450px;
  height: 410px;
  padding: 10px;
  margin: 5px auto;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const ImgPix = styled.form`
  display: flex;
  width: 280px;
  height: 410px;
  padding: 10px;
  margin: 2px auto;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Img = styled.img`
  display: flex;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const StyleButton = styled.div`
 display: flex;
 padding: 10px;
 gap: 80px;
`;

export const StyleValues = styled.div`
 display: flex;
 padding: 10px;
 gap: 10px;
`;

export const Select = styled.select`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  color: #022025;
  background-color: #fff;
  border: 1px solid #02b3d4;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
   &:hover {
    cursor: pointer;
    
  }
`;

const Input = styled.input`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  color: #2c73d2;
  &:hover {
    cursor: pointer;
    
  }
`;

export const Label = styled.label``;

var TotalGeral = '';
var ValorVenda = '';

export default function NestedModal({getPointofsale, onEdit, setOnEdit}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const ref = useRef();

  const handleSubmit = async (cod) => {
    
    cod = nv;

    const user = ref.current;

    if (!user.valor1.value) {
      return toast.warn("Valor não pode ser vazio!");
    }

      //variaveis  
      TotalGeral = parseFloat(+user.valor1.value)+(+user.valor2.value)+(+user.valor3.value)-(+user.valor.value);
      var Data = new Date().toLocaleDateString();
      var Codcliente = '1';
      var Codvendedor = 1;
      var Caixa = 1;
      

      await axios
        .put(url+"/Sale/" + cod, {

          codvenda: 1,
          codcaixa: Caixa,
          codvendedor: Codvendedor,
          hora: new Date().toLocaleTimeString(),
          data: Data,
          codcliente: Codcliente,
          obs: 'obs2555555',
          meiopagamento: 'DINHEIRO',
          subtotal: ValorVenda.toFixed(2),
          desconto: null,
          total: TotalGeral.toFixed(2),
          totalpago: TotalGeral.toFixed(2),
          troco: null,
          numerofiscal: null,
          retirado: null,
          situacao: 'O',
          contingencia: 'N',
          gerado_nfce: 'N',
          gerado_nfe: 'N',
          chave: null,
          xml: null,
          idempresa: 1,
          local_doc_fiscal: null,
        });
        nv = Date.now();
        console.log(nv)
   

    setOnEdit(null);
    getPointofsale();
    
    toast.success("Venda finalizada com sucesso!");
    handleClose();
  };

  
  return (
    <div>
     <Button1> 
      <Button sx={{width:"290px", color:"#fff"}} onClick={handleOpen}>Finalizar venda</Button>
     </Button1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >  
      <Box sx={{ ...StyleBox }}>
       <Formprinc > 
       <ImgPix>
        <Label style={{color:"#2c73d2", fontSize:"25px"}} >ACEITAMOS</Label>
        <Label style={{color:"#2c73d2", fontSize:"25px"}} >PAGAMENTO VIA PIX</Label>
        <Img src='./assets/pix.png'/>
       </ImgPix>
       <ModalFinalizarVenda ref={ref} onSubmit={handleSubmit}>
        <Label style={{color:"#2c73d2", fontSize:"25px"}} >FORMA DE PAGAMENTO</Label>
         <StyleValues>
            <Select style={{width: "180px"}} name="codvendedor">
             <option value={0}>DESCONTO R$</option>
             <option value={1}>DESCONTO %</option></Select>
            <Input formControlName="sGPTypeDeliveryId" placeholder="Apenas números!" class="form-control" required="required" type="number" min="1" max="9999" style={{width: "180px", fontSize: "16px"}} name="valor"/>
         </StyleValues> 
         <StyleValues>
            <Select style={{width: "180px"}} name="codvendedor">
             <option value={1}>DINHEIRO</option>
             <option value={2}>PIX</option>
             <option value={3}>CARTÃO CREDITO</option>
             <option value={4}>CARTÃO DEBITO</option>
             <option value={5}>APRAZO</option>
             <option value={6}>DEP/TRANSF</option></Select>
            <Input formControlName="sGPTypeDeliveryId" placeholder="Apenas números!" class="form-control" required="required" type="number" min="1" max="9999" style={{width: "180px", fontSize: "16px"}} name="Valor1"/>
         </StyleValues>
         <StyleValues style={{ marginTop: "-13px"}}>
            <Select style={{width: "180px"}} name="codvendedor">
             <option value={1}>DINHEIRO</option>
             <option value={2}>PIX</option>
             <option value={3}>CARTÃO CREDITO</option>
             <option value={4}>CARTÃO DEBITO</option>
             <option value={5}>APRAZO</option>
             <option value={6}>DEP/TRANSF</option></Select>
            <Input formControlName="sGPTypeDeliveryId" placeholder="Apenas números!" class="form-control" required="required" type="number" min="1" max="9999" style={{width: "180px", fontSize: "16px"}} name="valor2"/>
         </StyleValues>
         <StyleValues style={{ marginTop: "-13px"}}>
            <Select style={{width: "180px"}} name="codvendedor">
             <option value={1}>DINHEIRO</option>
             <option value={2}>PIX</option>
             <option value={3}>CARTÃO CREDITO</option>
             <option value={4}>CARTÃO DEBITO</option>
             <option value={5}>APRAZO</option>
             <option value={6}>DEP/TRANSF</option></Select>
            <Input formControlName="sGPTypeDeliveryId" placeholder="Apenas números!" class="form-control" required="required" type="number" min="1" max="9999" style={{width: "180px", fontSize: "16px"}} name="valor3"/>
         </StyleValues>
        <StyleValues style={{ marginLeft:"0", marginTop: "-13px"}}> 
        <Label style={{color:"#2c73d2", fontSize:"18px"}} >TOTAL A PAGAR.:</Label>
        <Label style={{color:"#dc3545", fontSize:"25px"}} >{ValorVenda}</Label>
        </StyleValues>
        <StyleValues style={{ marginTop: "-13px"}}> 
        <Label style={{color:"#2c73d2", fontSize:"18px"}} >TOTALIZADOR.:</Label>
        <Label style={{color:"#dc3545", fontSize:"18px"}} >{TotalGeral}</Label>
        </StyleValues>
        <StyleValues style={{ marginTop: "-13px"}}> 
        <Label style={{color:"#2c73d2", fontSize:"18px"}} >TROCO.:</Label>
        <Label style={{color:"#00ced1", fontSize:"18px"}} >50,14</Label>
        <Label style={{color:"#2c73d2", fontSize:"18px"}} >DIFERENÇA.:</Label>
        <Label style={{color:"#00ced1", fontSize:"18px"}} >0</Label>
        </StyleValues>
         <StyleButton style={{ marginTop: "-10px"}}>
          <Button onClick={() => handleSubmit()} style={{ width:"100px" , background: "#198754", color:"#fff"}}>Confirmar</Button>
          <Button style={{ width:"100px", background: "#dc3545", color:"#fff"}} onClick={handleClose}>Cancelar</Button>     
         </StyleButton>   
        </ModalFinalizarVenda>
       </Formprinc>
      </Box>
      </Modal>
     </div> 
  );
}
