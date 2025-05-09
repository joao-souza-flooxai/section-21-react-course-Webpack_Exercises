import React from 'react';
import ReactDOM from 'react-dom';
import  Primeiro  from './components/Primeiro';
import BomDia from './components/BomDia';
import { BoaNoite, BoaTarde } from './components/Multiplos';
import Saudacao from './components/Saudacoes';
ReactDOM.render(
    <>
        <Primeiro/>
        <BomDia name="João Victor"/>
        <BoaTarde/>
        <BoaNoite/>
        <Saudacao tipo= "Boa madrugada" nome="Lucas"/>

    </>
    , document.getElementById('root'));