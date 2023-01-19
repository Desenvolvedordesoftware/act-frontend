import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  margin: 6px;
  padding: 15px;
  list-style: none;
  height: 10px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  border-radius: 15px;

  &:hover {
    background: #4682B4;
    cursor: pointer;
    border-radius: 15px;
  } 
`;

const SidebarLabel = styled.span`
  margin-left: 12px;
`;
 
const DropdownLink = styled(Link)`
  height: 35px;
  padding-left: 2rem;
  margin: 2px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 15px;
  &:hover {
    background: #4682B4;
    cursor: pointer;
    border-radius: 15px;
    
  }
`;



const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
     <SidebarLink to={item.path} onClick={item.subNav && 
     showSubnav}>
      <div>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </div> 
      <div>
        {item.subNav && subnav
        ? item.iconOpened
        : item.subNav
        ? item.iconClosed
        : null}
      </div>  
     </SidebarLink>
     {subnav && item.subNav.map((item, index) => {
        return (
            <DropdownLink to={item.path} key={index}>
             {item.icon}
             <SidebarLabel>{item.title}</SidebarLabel>   
            </DropdownLink>
        )
     })}
    </>
  )  

}

export default SubMenu;