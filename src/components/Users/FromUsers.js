import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  max-width: 1900px;
  max-height: 1900px;
  align-items: flex-end;
  margin: 1px;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 5px;
  
  align-items: center;
  position: relative;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 145px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;

font-size: 12px;
`;

/* campo nome*/
const Input1 = styled.input`
  width: 320px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  text-transform: lowercase;

font-size: 12px;
`;

/* campo nome */
const Input2 = styled.input`
  width: 320px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  text-transform: uppercase;

font-size: 12px;
`;

const Select = styled.select`
  width: 340px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;

font-size: 12px;
`;

/*campo tipo */
const Select1 = styled.select`
  width: 163px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;

font-size: 12px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;

font-size: 12px;
`;


const FromUsers = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
      user.empresa.value = onEdit.empresa;
      user.senha.value = onEdit.senha;
      user.tipo_usuario.value = onEdit.tipo_usuario;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value ||
      !user.empresa.value ||
      !user.senha.value ||
      !user.tipo_usuario.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/users/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
          empresa: user.empresa.value,
          senha: user.senha.value,
          tipo_usuario: user.tipo_usuario.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/users", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
          empresa: user.empresa.value,
          senha: user.senha.value,
          tipo_usuario: user.tipo_usuario.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";
    user.senha.value = "";
    user.empresa.value = "";
    user.tipo_usuario.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input2 name="nome"/>
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input1 name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Senha</Label>
        <Input name="senha" type="password" uppercase/>
      </InputArea>
      <InputArea>
        <Label>Tipo Usuário</Label>
        <Select1 name="tipo_usuario">
          <option value={10}>ADMINISTRADOR</option>
          <option value={20}>FUNCIONÁRIO</option>
          <option value={30}>CLIENTE</option> 
        </Select1>
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      <InputArea>
        <Label>Empresa</Label>
        <Select name="empresa">
          <option value={1}>ACTHAUROS</option>
        </Select>  
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default FromUsers;