import React, { Component } from 'react';
import TodoItems from '../TodoItems';


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) { // adiciona os itens na lista
        let state = this.state;
        if (this._tarefaInput.value !== '') {
            let newItem = {
                text: this._tarefaInput.value, // pega o texto do valor do input
                key: Date.now() // utiliza a data como key, incluindo milissegundos...
            };
            this.setState({ items: [...state.items, newItem] });
        }

        e.preventDefault();
        this.setState({ tarefa: '' }); // limpa o input
    }

    deleteItem(key) { // deleta os itens da lista
        let filtro = this.state.items.filter((item) => {
            /* Retorna apenas os items que tiverem a 
            key diferente da key que recebe por parametro 
            na funcao e Retorna apenas as keys diferentes */
            return (item.key !== key);
        })
        this.setState({ items: filtro });
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.addItem}>
                    <input className="inputtext" type="text" placeholder="Nova Tarefa?" name="tarefa" value={this.state.tarefa} onChange={(ev) => this.setState({ tarefa: ev.target.value })} ref={(event) => this._tarefaInput = event} />
                    <button className="botao" type="submit">
                        Adicionar
                    </button>
                </form>

                <TodoItems lista={this.state.items} delete={this.deleteItem} />

            </div>
        )
    }
}

export default TodoList;