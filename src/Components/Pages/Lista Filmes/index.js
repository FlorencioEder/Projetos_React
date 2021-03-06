import React, { Component }from 'react';
import {Link} from 'react-router-dom';
import './lista_filmes.css'

class ListaFilmes extends Component{

	constructor(props){
		super(props);
		this.state = { 
			filmes: []
		};

		this.loadFilmes = this.loadFilmes.bind(this);
	}

	componentDidMount(){
		this.loadFilmes();
	}

	loadFilmes(){
		//Url da ApI: https://sujeitoprogramador.com/r-api/?api=filmes/
		let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
		fetch(url)
		.then((r) => r.json())
		.then((json) => {
			this.setState({filmes: json});
			console.log(json);
		});

	}

	render(){
		return(
			<div className="lista-filmes">
				{ this.state.filmes.map((filme) => {
					return(
						<article key={filme.id} className="post">
							<strong className="titulo"> {filme.nome} </strong>
							<img src={filme.foto} alt="Capa" />
							<Link to={`/filme/${filme.id}`}>Acessar</Link>
						</article>
					)
				}) }
			</div>
		);
	}
}

export default ListaFilmes;