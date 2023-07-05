import React, { Component } from 'react'

class Task extends Component {

    editTask = () => {
        const task = {
            id: this.props.id,
            titulo: this.props.titulo,
            descripcion: this.props.descripcion
        };
        this.props.editTaskMenu(task);
    }

    render() { 
        return (
            <div>
                <h2>{this.props.titulo}</h2>
                <p>{this.props.descripcion}</p>
                <button onClick={this.editTask} className='btn btn-outline-secondary'>Editar tarea</button>
            </div>
        );
    }
}
 
export default Task;