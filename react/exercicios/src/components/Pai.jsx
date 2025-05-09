import React from 'react';

export default function Pai(props) {
    return(
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>
                {props.children}
            </ul>
        </div>
    )
};