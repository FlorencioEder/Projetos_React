import React, { Component } from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import Cabecalho from './Components/Cabecalho';
import Home from './Components/Pages/Home';


const Routs = () => {
	return (
		<BrowserRouter>
			<Cabecalho />
			<Switch>
				<Router exact path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	)

}

export default Routs;