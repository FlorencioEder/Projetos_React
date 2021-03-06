import React, { Component } from 'react';
import './cabecalho.css';
import {Link} from 'react-router-dom';

//cabecalho do site

class Cabecalho extends Component { 

	render() {
		return (
			<header className="header">
				<Link to="/">Rederizando</Link>
			</header>
		);
	}
}

export default Cabecalho;