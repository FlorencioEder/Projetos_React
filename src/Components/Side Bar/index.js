import React, { Component } from 'react';
import './side_bar.css';
import {Link} from 'react-router-dom';


class Sidebar extends Component { 

	render() {
		return (
			<div className="menu">
				<div>ola mundooo</div>
				<ul>
					<li><Link to="/listafilmes">Rederizando</Link></li>
					<li><Link to="/filme/:id">Rederizando</Link></li>
					<li><Link to="/biscoito">Rederizando</Link></li>
					<li><Link to="/cronometro">Rederizando</Link></li>
					<li><Link to="/todoList">Rederizando</Link></li>
				</ul>
			</div>
		);
	}
}

export default Sidebar;