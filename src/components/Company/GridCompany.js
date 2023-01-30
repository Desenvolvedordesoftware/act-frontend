import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa"
import { toast } from "react-toastify";
import { url } from "../../components/Function/Function"



const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1900px;
  margin: 20px auto;
  word-break: break-all;
  font-size: 12px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}  
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start" )};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const GridCompany = ({ company, setCompany, setOnEdit, showSidebar }) => {
   const handleEdit = (item) => {
    setOnEdit(item);
   };

   const handleDelete = async (id) => {
    await axios
     .delete(url+"/Company/" + id)
     .then(({ data }) => {
        const newArray = company.filter((company) => company.id !== id);

        setCompany(newArray);
        toast.success(data);
     })
     .catch(({ data }) => toast.error(data));

    setOnEdit(null); 
   }

    return (
     <Table>
      <Thead>
        <Tr>
         <Th>Nome</Th>
         <Th>CNPJ / CPF</Th>
         <Th onlyWeb>Fantasia</Th>
         <Th></Th>
         <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
       {company.map((item, i) => (
        <Tr key={i}>
         <Td width="30%">{item.filial}</Td>
         <Td width="30%">{item.cnpj}</Td>
         <Td width="30%" onlyWeb>
            {item.fantasia}
         </Td>
         <Td alignCenter width="10%">
            <FaEdit onClick={() => handleEdit(item)} showSidebar={showSidebar}/>
         </Td>
         <Td alignCenter width="10%">
            <FaTrash onClick={() => handleDelete(item.id)}/>
         </Td>
         </Tr>
       ))}
      </Tbody>
     </Table>
    );
};

export default GridCompany;