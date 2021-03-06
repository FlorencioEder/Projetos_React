import React, { Component } from 'react';
import './estilo.css'


class Biscoito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.frases = ['Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'];

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

    }

    quebraBiscoito() { // ao clicar no botao altera o valor do estado da frase
        let state = this.state; // desconstroi o state
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length); //gera um numero aleatorio de acordo com a quantidade de frases
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "' // concatena a frase escolhida com aspas
        this.setState(state);
    }

    render() {
        return (
            <div className="post">
                <img src={require('../assets/biscoito.png')} className="img" />
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component { //botao generico que recebe uma acao e um "nome" para o botao
    render() {
        return (
            <div>
                <strong className="titulo">Biscoito da sorte</strong>
                <p className="subtitulo">Esta com sorte hoje?<br />Abra um de nossos maravilhosos
                biscoitos da sorte e encontre uma mensagem motivadora para seu dia.</p>
                <div className="capa" >
                    <button className="botao" onClick={this.props.acaoBtn} >{this.props.nome}</button>
                </div>
            </div>
        );
    }
}



export default Biscoito;