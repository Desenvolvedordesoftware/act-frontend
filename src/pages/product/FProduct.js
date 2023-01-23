//import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Sidebar from "../../components/Dashboard/Sidebar.js";
import Fromproduct from "../../components/Product/FromProduct.js";
import Gridproduct from "../../components/Product/GridProduct.js";

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
`;

const ContainerGrid = styled.div`
  overflow: auto;
  box-sizing: border-box;
  position: relative;
  
`;


const Title = styled.h2``;

function FProduct() {
  const [product, setProduct] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getProduct = async () => {
    try {
      const res = await axios.get("http://ec2-18-231-63-200.sa-east-1.compute.amazonaws.com:8800/Product");
      setProduct(res.data.sort((a, b) => (a.produto > b.produto ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [setProduct]);

  return (
    <>
    <Sidebar/> 
      <Container>
        <Title style={{color:"#fff"}}>Produtos | Estoque | Ficha de Produtos</Title>
        <Fromproduct onEdit={onEdit} setOnEdit={setOnEdit} getProduct={getProduct} />
      </Container>
      <ContainerGrid >
       <Gridproduct product={product} setProduct={setProduct} setOnEdit={setOnEdit} />
      </ContainerGrid>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
     
      
    </>
  );
}

export default FProduct;
