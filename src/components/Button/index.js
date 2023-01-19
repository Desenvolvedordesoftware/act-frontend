import React from 'react';
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
    return (
        <C.button type={Type} onClick={onClick}>
            {Text}
        </C.button>
    );
};

export default Button;