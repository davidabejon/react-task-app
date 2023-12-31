import React, { Component } from 'react'
import { Trans } from '@lingui/macro';

class EditingScreen extends Component {

    state = {
        titulo: this.props.titulo,
        descripcion: this.props.descripcion
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.backToMainMenu();
    }

    getValueTitulo = (e) => {
        this.setState({
            titulo: e.target.value
        });
    }
    getValueDescripcion = (e) => {
        this.setState({
            descripcion: e.target.value
        });
    }

    editTask = (e) => {
        e.preventDefault();

        if (this.props.titulo === this.state.titulo && this.props.descripcion === this.state.descripcion) {
            window.alert('Cambie el título o descripción de la tarea.')
        }
        else {
            const newTask = {
                id: this.props.id,
                titulo: this.state.titulo,
                descripcion: this.state.descripcion
            };
            const oldTask = {
                id: this.props.id,
                titulo: this.props.titulo,
                descripcion: this.props.descripcion
            };
            console.log(newTask);
            console.log(oldTask);
            
            this.props.editTask(oldTask, newTask);
            window.alert('Tarea editada con éxito.');
            this.props.backToMainMenu();
        }
    }

    deleteTask = (e) => {
        e.preventDefault();
        if (window.confirm(`¿Está seguro de que quiere borrar la tarea ${this.props.titulo}?`)) {
            const task = {
                id: this.props.id,
                titulo: this.props.titulo,
                descripcion: this.props.descripcion
            };
            console.log(task);
            this.props.deleteTask(task);
            this.props.backToMainMenu();
        }
    }

    render() { 
        return (
            <div className='container mt-5'>
                <h1 className=''><Trans>Edición de tarea</Trans></h1>
                <form className='d-flex flex-column gap-2'>
                    <label htmlFor='titulo'><Trans id='titulo-editar'>Titulo</Trans></label>
                    <input
                        value={this.state.titulo}
                        onChange={(evt) => this.getValueTitulo(evt)}
                        id='titulo'
                        type='text'
                        className='form-control'
                        placeholder='Escriba el título...'>
                    </input>
                    <label htmlFor='descripcion'><Trans id='descripcion-editar'>Descripcion</Trans></label>
                    <textarea
                        value={this.state.descripcion}
                        onChange={(evt) => this.getValueDescripcion(evt)}
                        id='descripcion'
                        type='text'
                        className='form-control'
                        placeholder='Escriba la descripción...'
                        rows={6}>
                    </textarea>
                    <button onClick={this.editTask} className='btn btn-primary'><Trans>Editar</Trans></button>
                    <button onClick={this.deleteTask} className='btn btn-danger'><Trans>Borrar</Trans></button>
                    <button onClick={this.goBack} className='btn btn-outline-secondary'><Trans id='atras-editar'>Atrás</Trans></button>
                </form>
            </div>
        );
    }
}
 
export default EditingScreen;