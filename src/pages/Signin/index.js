import React, { useState } from 'react';
import Input from "../../components/Input/index";
import Button from '../../components/Button/index';
import * as C from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preecha todos os campos!");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/Dashboard");
    };

    return (
     <C.Container>
        <C.Content>
          <C.Label>ACThauros</C.Label>
          <C.LabelSignup>Sistema Gestão Comercial</C.LabelSignup>
            <Input
            type="email"
            placeholder="Digite seu E-mail!"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
            type="password"
            placeholder="Digite sua Senha!"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.labelError>{error}</C.labelError>
            <Button Text="Entrar" onClick={handleLogin} />
            <C.LabelSignup >
              Não tem uma Conta?
                <C.Strong >
                    <Link to="/">&nbsp;WhatSapp:(94)98171-8468!</Link>
                </C.Strong>  
            </C.LabelSignup>
        </C.Content>
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
     </C.Container>
    );
};

export default Signin;