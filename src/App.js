import React, { Component } from 'react';
// import Biscoito from './Components/Avulsos/Biscoito';
// import Cronometro from './Components/Avulsos/Cronometro';
// import TodoList from './Components/Avulsos/TodoList';
import Routs from './routes.js';
import './style.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //Caso queira criar estados para o app como um todo
        };

    }

    render() {
        return (
            <div className="container">
                <Routs />
                {/*

                -----------------------------------------------------------------------------------
                --componentes abaixo estao comentados porem ainda estao disponiveis e funcionais.--
                -----------------------------------------------------------------------------------

                <div className="post">
                    <strong className="titulo">Biscoito da sorte</strong>
                    <p className="subtitulo">Esta com sorte hoje?<br />Abra um de nossos maravilhosos
                    biscoitos da sorte e encontre uma mensagem motivadora para seu dia.</p>
                    <Biscoito className="capa" />
                </div>

                <div className="post">
                    <strong className="titulo">Cronometro</strong>
                    <p className="subtitulo">Quanto tempo voce demora para resolver um cubo magigo?
                    Como assim voce nao sabe?<br />Aproveite este cronometro para descobrir, estamos
                    trabalhando em um cubo para colocar abaixo rsrs</p>
                    <Cronometro className="capa" />
                </div>

                <div className="post">
                    <strong className="titulo">lista de afa</strong>
                    <p className="subtitulo">Ja sentiu a necessidade de se organizar e fazer uma lista
                    com seus afazeres do dia?<br />Ainda bem que desenvolvemos uma lista dinâmica
                    especialmente para voce, nela voce sera capaz de adicionar e deletar suas atividades do dia</p>
                    <TodoList className="capa" />
                </div> */}

            </div>
        );
    }
}

export default App;

