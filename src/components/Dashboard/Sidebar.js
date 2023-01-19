import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons';
import * as MdIcons from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Nav = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 50px;
  max-width: 31900px;
  align-items: center;
  word-break: break-all;
  flex-wrap: wrap;
  background: #02b3d4;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);   
  transition: 350ms;
  z-index: 12;

`;

const NavIcon = styled(Link)`
  margin-left: 10px;
  font-size: 25px;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
`;

const NavSair = styled.div`
  margin-left: 10px;
  font-size: 25px;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    width: 220px;
    background: #4682B4;
    cursor: pointer;
    border-radius: 15px;
  } 
`;

const Company = styled.div`
display: flex;
gap: 20px;
align-items: start;
justify-content: center;
`;

const SidebarNav = styled.nav`
  display: flex;
  width: 250px;
  height: 550px;
  justify-content: start;
  position: fixed;
  align-items: start;
  flex-direction: column;
  padding: 5px;
  margin: 2px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: #02b3d4;
  width: 100%;
  border-radius: 10px;
`;

const LinesIcon = styled.div`
  display: flex;
`;

const InputArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const Label = styled.label`
color: #fff;
`;

const Select = styled.select`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  color: #02b3d4;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 30px;
  font-size: 12px;
`;

const FormContainer = styled.form`
display: flex;
`;

export const IdEmpresa = 1;


export const Img = styled.img``;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const ref = useRef();

  const { signout } = useAuth();
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar)

  const handleSubmit = async (e) => {
    e.preventDefault();
     
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} style={{color: '#fff'}} />
        </NavIcon>
        
        <Company>
         <Img 
          src='./assets/LG_empresa.png'  
          style={{ maxWidth:"100px", maxHeight:"40px", marginTop: "1%", marginLeft:"20px"}} />
         <FormContainer ref={ref} onSubmit={handleSubmit}> 
          <InputArea >
            <Label>Empresa</Label>
            <Select style={{width: "150px"}} name="empresa">
              <option value={1}>MATRIZ</option>
              <option value={2}>FILIAL-1</option>
              <option value={3}>FILIAL-2</option>
              <option value={4}>FILIAL-3</option>
            </Select>  
          </InputArea>
         </FormContainer>
        </Company>
      </Nav>
      <SidebarNav sidebar={sidebar}>
       <LinesIcon>
        <Img 
          src='./assets/illustration_dashboard.png'  
          style={{maxWidth:"100px", maxHeight:"80px",
          width: "auto", height: "auto"}} />
          <div 
          style={{display:"flex", margin:"30px", marginLeft: "2px", color:"#02b3d4",fontSize:"16px"}}
          >
          Olá, Wilson
          </div>
       </LinesIcon>
        <SidebarWrap>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />
        })}
        <NavSair style={{display:"flex", color: '#fff',fontSize:"18px", gap:"10px" }}>
        <MdIcons.MdOutlinePowerSettingsNew style={{ marginLeft:"10px"}} onClick={() => [signout(), navigate("/")]}/>
        <Label onClick={() => [signout(), navigate("/")]}>Sair</Label>
        </NavSair>
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
    </>
  )
}

export default Sidebar;
