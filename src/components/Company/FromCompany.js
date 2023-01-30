import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { url } from "../../components/Function/Function"

export const Page = styled.div`

`;

const FormContainer = styled.form`
 display: flex;
  max-width: 1900px;
  max-height: 1900px;
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

/* campo cep */
const Input3 = styled.input`
  width: 75px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  text-transform: uppercase;

font-size: 12px;
`;

/* campo complemento */
const Input4 = styled.input`
  width: 216px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  text-transform: uppercase;

font-size: 12px;
`;

/* campo uf  */
const Select4 = styled.select`
  width: 65px;
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

const FromCompany = ({ getCompany, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.filial.value = onEdit.filial;
      user.fantasia.value = onEdit.fantasia;
      user.endereco.value = onEdit.endereco;
      user.numero.value = onEdit.numero;
      user.complemento.value = onEdit.complemento;
      user.bairro.value = onEdit.bairro;
      user.cidade.value = onEdit.cidade;
      user.uf.value = onEdit.uf;
      user.cep.value = onEdit.cep;
      user.responsavel.value = onEdit.responsavel;
      user.cpf_responsavel.value = onEdit.cpf_responsavel;
      user.fone_responsavel.value = onEdit.fone_responsavel;
      user.atividade.value = onEdit.atividade;
      user.telefone.value = onEdit.telefone;
      user.data_abertura.value = onEdit.data_abertura;
      user.cnpj.value = onEdit.cnpj;
      user.ie.value = onEdit.ie;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.filial.value ||
      !user.fantasia.value ||
      !user.endereco.value ||
      !user.numero.value ||
      !user.complemento.value ||
      !user.bairro.value ||
      !user.cidade.value ||
      !user.uf.value ||
      !user.cep.value ||
      !user.responsavel.value ||
      !user.cpf_responsavel.value ||
      !user.fone_responsavel.value ||
      !user.atividade.value ||
      !user.telefone.value ||
      !user.data_abertura.value ||
      !user.cnpj.value ||
      !user.ie.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put(url+"/company/" + onEdit.id, {
          filial: user.filial.value,
          fantasia: user.fantasia.value,
          endereco: user.endereco.value,
          numero: user.numero.value,
          complemento: user.complemento.value,
          bairro: user.bairro.value,
          cidade: user.cidade.value,
          uf: user.uf.value,
          cep: user.cep.value,
          responsavel: user.responsavel.value,
          cpf_responsavel: user.cpf_responsavel.value,
          fone_responsavel: user.fone_responsavel.value,
          atividade: user.atividade.value,
          telefone: user.telefone.value,
          data_abertura: user.data_abertura.value,
          cnpj: user.cnpj.value,
          ie: user.ie.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post(url+"/company", {
          filial: user.filial.value,
          fantasia: user.fantasia.value,
          endereco: user.endereco.value,
          numero: user.numero.value,
          complemento: user.complemento.value,
          bairro: user.bairro.value,
          cidade: user.cidade.value,
          uf: user.uf.value,
          cep: user.cep.value,
          responsavel: user.responsavel.value,
          cpf_responsavel: user.cpf_responsavel.value,
          fone_responsavel: user.fone_responsavel.value,
          atividade: user.atividade.value,
          telefone: user.telefone.value,
          data_abertura: user.data_abertura.value,
          cnpj: user.cnpj.value,
          ie: user.ie.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.filial.value = "";
    user.fantasia.value = "";
    user.endereco.value = "";
    user.numero.value = "";
    user.complemento.value = "";
    user.bairro.value = "";
    user.cidade.value = "";
    user.uf.value = "";
    user.cep.value = "";
    user.responsavel.value = "";
    user.cpf_responsavel.value = "";
    user.fone_responsavel.value = "";
    user.atividade.value = "";
    user.telefone.value = "";
    user.data_abertura.value = "";
    user.cnpj.value = "";
    user.ie.value = "";

    setOnEdit(null);
    getCompany();
  };

  return (
   <Page >
    <FormContainer ref={ref} onSubmit={handleSubmit} >
      <InputArea>
        <Label>Razão Social</Label>
        <Input2 name="filial"/>
      </InputArea>
      <InputArea>
        <Label>Fantasia</Label>
        <Input2 name="fantasia"/>
      </InputArea>
      <InputArea>
        <Label>Endereço</Label>
        <Input2 name="endereco"/>
      </InputArea>
      <InputArea>
        <Label>Numero</Label>
        <Input3 name="numero" />
      </InputArea>
      <InputArea>
        <Label>Complemento</Label>
        <Input4 name="complemento"/>
      </InputArea>
      <InputArea>
        <Label>Bairro</Label>
        <Input2 name="bairro"/>
      </InputArea>
      <InputArea>
        <Label>Cidade</Label>
        <Select1 name="cidade">
          <option value={1}>Brusque</option>
        </Select1>
      </InputArea>
      <InputArea>
        <Label>UF</Label>
        <Select4 name="uf">
          <option value={1}>SC</option>
        </Select4>
      </InputArea>
      <InputArea>
        <Label>CEP</Label>
        <Input3 name="cep" />
      </InputArea>
      <InputArea>
        <Label>Responsável</Label>
        <Input1 name="responsavel" />
      </InputArea>
      <InputArea>
        <Label>CPF Responsável</Label>
        <Input name="cpf_responsavel" />
      </InputArea>
      <InputArea>
        <Label>Telefone Responsável</Label>
        <Input name="fone_responsavel" />
      </InputArea>
      <InputArea>
        <Label>Atividade</Label>
        <Select name="atividade">
          <option value={1}>COMÉRCIO</option>
          <option value={2}>DISTRIBUIDORA</option>
        </Select>  
      </InputArea>
      <InputArea>
        <Label>Telefone empresa</Label>
        <Input name="telefone" />
      </InputArea>
      <InputArea>
        <Label>Data de Abertura</Label>
        <Input name="data_abertura" type="date" />
      </InputArea>
      <InputArea>
        <Label>CNPJ</Label>
        <Input name="cnpj" />
      </InputArea>
      <InputArea>
        <Label>Insc. Estadual</Label>
        <Input name="ie" />
      </InputArea>
      
      <Button type="submit" >SALVAR</Button>
    </FormContainer>
   </Page>  
  );
};

export default FromCompany;