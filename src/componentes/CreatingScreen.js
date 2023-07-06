import { Trans } from '@lingui/react';
import React, { Component } from 'react'

class CreatingScreen extends Component {

    tituloRef = React.createRef();
    descripcionRef = React.createRef();

    state = {
        titulo: '',
        descripcion: ''
    } 

    createTask = (e) => {
        e.preventDefault();
        if (this.tituloRef.current.value === '' && this.descripcionRef.current.value === '') {
            window.alert('Introduzca un título y una descripción.')
        }
        else if (this.tituloRef.current.value === '') {
            window.alert('Introduzca un título.')
        }
        else if (this.descripcionRef.current.value === '') {
            window.alert('Introduzca una descripción.')
        }
        else {
            const tarea = {
                titulo: this.tituloRef.current.value,
                descripcion: this.descripcionRef.current.value,
                id: this.props.getLastId()+1
            };
            this.props.addTask(tarea);
            window.alert('Tarea creada con éxito!');
            this.props.backToMainMenu();
        }
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.backToMainMenu();
    }


    render() { 
        return (
            <div className='container mt-5'>
                <h1><Trans id='nueva-tarea'>Introduzca los datos de su nueva tarea</Trans></h1>
                <form className='d-flex flex-column gap-2'>
                    <label htmlFor='titulo'><Trans id='titulo-crear'>Titulo</Trans></label>
                    <input
                        ref={this.tituloRef}
                        id='titulo'
                        type='text'
                        className='form-control'
                        placeholder='Escriba el título...'>
                    </input>
                    <label htmlFor='descripcion'><Trans id='desripcion-crear'>Descripcion</Trans></label>
                    <textarea
                        ref={this.descripcionRef}
                        id='descripcion'
                        type='text'
                        className='form-control'
                        placeholder='Escriba la descripción...'
                        rows={6}>
                    </textarea>
                    <button onClick={this.createTask} className='btn btn-primary'><Trans id='add-crear'>Añadir</Trans></button>
                    <button onClick={this.goBack} className='btn btn-outline-secondary'><Trans id='atras-crear'>Atrás</Trans></button>
                </form>
            </div>
        );
    }
}
 
export default CreatingScreen;