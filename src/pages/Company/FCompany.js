//import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import FromCompany from "../../components/Company/FromCompany";
import GridCompany from "../../components/Company/GridCompany";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Sidebar from "../../components/Dashboard/Sidebar";
import { url } from "../../components/Function/Function"

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
`;

const ContainerFic = styled.div`
  
`;

const Title = styled.h2`
`;

function FCompany() {
  const [company, setCompany] = useState([]);
  const [onEdit, setOnEdit] = useState(null);


  const getCompany = async () => {
    try {
      const res = await axios.get(url+"/company");
      setCompany(res.data.sort((a, b) => (a.filial > b.filial ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCompany();
  }, [setCompany]);

  return (
    <>
    <Sidebar/> 
      <Container>
        <Title style={{color:"#fff"}}>Configurações | Empresa | Ficha da empresa</Title>
       <ContainerFic > 
        <FromCompany onEdit={onEdit} setOnEdit={setOnEdit} getCompany={getCompany} />
       </ContainerFic>
        <GridCompany company={company} setCompany={setCompany} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
     
      
    </>
  );
}

export default FCompany;
