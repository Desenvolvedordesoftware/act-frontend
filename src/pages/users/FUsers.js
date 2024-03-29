import styled from "styled-components";
import Sidebar from "../../components/Dashboard/Sidebar";
import FromUsers from "../../components/Users/FromUsers";
import GridUsers from "../../components/Users/GridUsers";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { url } from "../../components/Function/Function"

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h2``;

function FUsers() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get(url+"/users");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
    <Sidebar/> 
      <Container>
        <Title style={{color:"#fff"}}>Cadastro | Usuários | Ficha dos Usuários</Title>
        <FromUsers onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <GridUsers users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
   
      
    </>
  );
}

export default FUsers;
