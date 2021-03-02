import React, { Component } from 'react';
import './estilo.css'

// Importando a imagem do cronometro
import cronometro from '../assets/cronometro.png';

class Cronometro extends Component {

	constructor(props) {
		super(props);
		this.state = {
			numero: 0, //tempo do cronometro
			botao: 'VAI' //texto do botao de vai e pausa inicia como "VAI"
		};
		this.timer = null; //valida se o tempo esta correndo ou nao
		this.vai = this.vai.bind(this);
		this.limpar = this.limpar.bind(this);
	}

	vai() { //inicia e para de contar o tempo
		let state = this.state;

		if (this.timer !== null) { //se o tempo estiver rodando para de rodar
			clearInterval(this.timer);
			this.timer = null;
			state.botao = 'VAI';
		} else { // se o tempo estiver parado comeca a rodar
			this.timer = setInterval(() => {
				let state = this.state;
				state.numero += 0.1;
				this.setState(state);
			}, 100); // acrescenta 0,1 segundo no contador a cada 0,1 segundo
			state.botao = 'PAUSAR';
		}

		this.setState(state);
	}

	limpar() { // loimpa o valor do cronometro
		if (this.timer !== null) { // caso o tempo esteja rodando, para
			clearInterval(this.timer);
			this.timer = null;
		}

		let state = this.state;
		state.numero = 0; // zera o tempo
		state.botao = 'VAI'; // altera o valor do botao
		this.setState(state);

	}

	render() {
		return (
			<div className="container">
				<img src={cronometro} className="img" />
				<a className="timer">{this.state.numero.toFixed(1)}</a>  {/*valor dentro do cronometro*/}
				<div className="areaBtn">
					<a className="botao" onClick={this.vai}>{this.state.botao}</a> {/* botao de "vai" e  "para"*/}
					<a className="botao" onClick={this.limpar}>LIMPAR</a>
				</div>
			</div>
		);
	}
}

export default Cronometro;