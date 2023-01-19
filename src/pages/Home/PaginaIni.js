import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from '../../components/Dashboard/Sidebar';

const Header = styled.header`
display: flex;
max-width: 1900px;
max-height: 1900px;
align-items: flex-end;
flex-direction: column;
margin: 1px;
padding: 10px;
flex-wrap: wrap;
border-radius: 5px;
align-items: right;
position: relative;
`;

export const Img = styled.img`
  display: flex;
  max-width: 1900px;
  max-height: 1900px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Div = styled.div`
 display: flex;
 gap: 10px;
`;

const PaginaIni = () => {
  return (
  <>  
  <Sidebar/>
   <Header>  
    <Div>
     <h2 style={{color:"#fff"}} >Dashboard</h2>
     <Img src='./assets/illustration_dashboard.png'/>
    </Div>
   </Header>
   <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
  </> 
  )
}

export default PaginaIni;
