import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './style.css';
import Cabecalho from './Components/Cabecalho';
import Sidebar from './Components/Side Bar';
import Home from './Components/Pages/Home';

import ListaFilmes from './Components/Pages/Lista Filmes';
import Erro from './Components/Pages/Erro';

import Filme from './Components/Pages/Filme';
import Biscoito from './Components/Pages/Biscoito';
import Cronometro from './Components/Pages/Cronometro';
import TodoList from './Components/Pages/TodoList';

const Routs = () => {
	return (
		<div>
			<BrowserRouter>
				<Cabecalho />
				<div className="container">
					<Sidebar />
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/listafilmes" component={ListaFilmes}/>
						<Route exact path="/filme/:id" component={Filme}/>
						
						<Route exact path="/biscoito" component={Biscoito}/>
						<Route exact path="/cronometro" component={Cronometro}/>
						<Route exact path="/todoList" component={TodoList}/>

						<Route path="*" component={Erro}/>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	)

}

export default Routs;