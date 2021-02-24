import React, { Component } from 'react';
import Biscoito from './components/Biscoito';
import Cronometro from './components/Cronometro';
import TodoList from './components/TodoList';
import Cabecalho from './components/Cabecalho';
import './style.css';
//imports de todos os metodos


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
                <Cabecalho />

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
                </div>

            </div>
        );
    }
}

export default App;