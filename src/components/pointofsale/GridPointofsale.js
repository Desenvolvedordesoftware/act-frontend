import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa"
import { toast } from "react-toastify";



const Table = styled.table`
  width: 100%;
  min-width: 400px;
  max-width: 31024px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1900px;
  word-break: break-all;
  font-size: 12px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    cursor: pointer;
    
  }
`;

export const Thead = styled.thead`

`;

export const Tbody = styled.tbody`
`;

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

const GridPointofsale = ({ pointofsale, setPointofSale, setOnEdit }) => {
  //   const handleEdit = (item) => {
  //    setOnEdit(item);
  //   };

const handleDelete = async (id) => {
  await axios
   .delete("http://localhost:8800/Saleitems/" + id)
   .then(({ data }) => {
      const newArray = pointofsale.filter((pointofsale) => pointofsale.id !== id);
      
      setPointofSale(newArray);
      toast.success(data);
   })
   .catch(({ data }) => toast.error(data));

  setOnEdit(null); 
}
  return (
  <Table >
    <Tbody>
     {pointofsale.map((item, i) => (
      <Tr key={i}>
       <Td width="6%" onlyWeb>{item.id_item}</Td>
       <Td width="22%" onlyWeb>{item.codbarra}</Td>
       <Td width="35%" >{item.produto}</Td>
       <Td width="6%" onlyWeb>{item.unidade}</Td>
       <Td width="8%" >{item.qtde}</Td>
       <Td width="9%" >{item.unitario}</Td>
       <Td width="9%" >{item.total}</Td>
       <Td alignCenter width="5%">
          <FaTrash onClick={() => handleDelete(item.id)}/>
       </Td>
       </Tr>
     ))}
    </Tbody>
   </Table>
  );
};

export default GridPointofsale;