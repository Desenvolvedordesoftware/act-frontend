import styled from "styled-components";

export const button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #02b3d4;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  padding: 16px 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);   
  transition: 350ms;
  z-index: 15;
  &:hover {  
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: rgba(31, 38, 135, 0.37);
    cursor: pointer;
    border-radius: 15px;
    transition: 150ms;
    z-index: 10;
  } 

`;