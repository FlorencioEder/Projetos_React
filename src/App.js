import React, { Component } from 'react';
import Routs from './routes.js';
import './style.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //Caso queira criar estados para o app como um todo
        };

    }

    render() {
        return (
            <div>
                <Routs />
            </div>
        );
    }
}

export default App;

