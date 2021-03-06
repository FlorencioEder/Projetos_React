import React, { Component } from 'react';
import './side_bar.css';
import {Link} from 'react-router-dom';


class Sidebar extends Component { 

	render() {
		return (
			<div className="menu">
				<ul>
					<li><Link to="/listafilmes">Filmes</Link></li>
					<li><Link to="/biscoito">Biscoito</Link></li>
					<li><Link to="/cronometro">Cronometro</Link></li>
					<li><Link to="/todoList">To Do List</Link></li>
				</ul>
			</div>
		);
	}
}

export default Sidebar;