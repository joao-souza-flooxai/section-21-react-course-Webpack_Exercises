import React from 'react';
import ReactDOM from 'react-dom';
import  Primeiro  from './components/Primeiro';
import BomDia from './components/BomDia';
import { BoaNoite, BoaTarde } from './components/Multiplos';
import Saudacao from './components/Saudacoes';
import Pai from './components/Pai';
import Filho from "./components/Filho"
ReactDOM.render(
    <>
        <Primeiro/>
        <BomDia name="João Victor"/>
        <BoaTarde/>
        <BoaNoite/>
        <Saudacao tipo= "Boa madrugada" nome="Lucas"/>
        <Pai>
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="João" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>

    </>
    , document.getElementById('root'));