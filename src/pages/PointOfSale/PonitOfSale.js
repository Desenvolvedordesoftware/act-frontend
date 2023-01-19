import * as React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Sidebar from '../../components/Dashboard/Sidebar';
import FromPointofsale from '../../components/pointofsale/FromPointofsale';
import GridPointofsale from '../../components/pointofsale/GridPointofsale';
import { ChaveVenda } from '../../components/Function/Function';


const Page = styled.div`
 display: flex;
`;

const Main = styled.div`
 width: 100%;
 height: 100%;
 max-width: 31900px;
 position: relative;
 border-radius: 10px;
 overflow: hidden;
 word-break: break-all;
 flex-wrap: wrap;
`;


const Aside = styled.aside`
  display: flex;
  width: 320px;
  min-width: 320px;
  height: 100%;
  max-height: 560px;
  overflow: hidden;
  justify-content: start;
  position: relative;
  align-items: start;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 350ms;
  z-index: 1;  
`;

const Content = styled.div`
  display: flex;
  width: 100vh;
  min-width: 400px;
  max-width: 31024px;
  height: 100%;
  max-height: 550px;
  justify-content: start;
  position: relative;
  align-items: start;
  flex-direction: column;
  padding: 5px;
  margin: 2px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 350ms;
  z-index: 1; 
`;

export const Grid = styled.div`
 width: 100%;
 min-width: 400px;
 max-width: 31024px;
 margin: 0 auto;
 height: 100%;
 overflow: auto;
 border-radius: 5px;

 border: 1px solid rgba(31, 38, 135, 0.37);   
`;

export const Thead = styled.thead`
 width:100%;
 font-size: 12px;
 color: #fff;
`;

export const Tr = styled.tr`
display: flex;
`;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  
`;

export const Div = styled.div`
  width: 100%;
  min-width: 400px;
  max-width: 41024px;
  height: 100%;
  background-color: #fff;
  padding: 10px;
  position: absolute;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1900px;
  word-break: break-all;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);   
  transition: 350ms;
  z-index: 12;
  &:hover {
    cursor: pointer;
    
  }
  
 // display: ${({ sidebar }) => (sidebar ? 'none' : 'flex')};
`;



export var nv = ChaveVenda 

const PonitOfSale = () => {
  const [sidebar, setSidebar] = useState(false)
  
  const [pointofsale, setPointofSale] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const showSidebar = () => setSidebar(!sidebar)

  const getPointofsale = async (codnota) => {

    codnota = nv;

    try {
      const res = await axios.get("http://localhost:8800/saleitems/" +codnota);
      setPointofSale(res.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPointofsale();
  }, [setPointofSale]);

 return (
  <>
    <Sidebar/> 
    <Main>
    <Page>
    <Aside >
      <FromPointofsale onEdit={onEdit} setOnEdit={setOnEdit} getPointofsale={getPointofsale} showSidebar={showSidebar}/>
    </Aside>
    <Content >
      <Thead>
          <Tr>
          <Th width="6%" >Item</Th>
          <Th width="22%" >Código Barra</Th>
          <Th width="34%" >Descrição</Th>
          <Th width="6%" >UN.</Th>
          <Th width="8%" >Qtde</Th>
          <Th width="8%" >Unitário</Th>
          <Th >Total</Th>
          <Th ></Th>
          </Tr>
        </Thead>
    <Grid> 
      <GridPointofsale pointofsale={pointofsale} setPointofSale={setPointofSale} setOnEdit={setOnEdit}  />
    </Grid>
    </Content>
    </Page>
    <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
    </Main>
  </>
 )
}

export default PonitOfSale;
