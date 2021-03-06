import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecalho from './Components/Cabecalho';

import Home from './Components/Pages/Home';
import Filme from './Components/Pages/Filme';
import Erro from './Components/Pages/Erro';


const Routs = () => {
	return (
		<BrowserRouter>
			<Cabecalho />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/filme/:id" component={Filme}/>
				<Route path="*" component={Erro}/>
			</Switch>
		</BrowserRouter>
	)

}

export default Routs;