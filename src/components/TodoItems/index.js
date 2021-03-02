import React, { Component } from 'react';

class TodoItems extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.delete = this.delete.bind(this);
    }

    delete(key) { // deleta o item
        this.props.delete(key);
    }

    render() {
        return (
            <div className="container">
                <ul className="lista">
                    {this.props.lista.map((item) => { // mapeia a lista e cria os itens
                        return (
                            <li className="itemlista" onClick={() => this.delete(item.key)} key={item.key}> {item.text} </li> // funcao anonima no proprio item para deletalo ao clicar
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoItems;