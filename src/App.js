import React, { Component } from 'react'
import Task from './componentes/Task';
import EditingScreen from './componentes/EditingScreen';
import CreatingScreen from './componentes/CreatingScreen';

class App extends Component {

  state = {
    editing: false,
    creating: false,
    editingTask: {},
    tasks: [
      {
        id: 1,
        titulo: 'titulo1',
        descripcion: 'descripcion1'
      },
      {
        id: 2,
        titulo: 'titulo2',
        descripcion: 'descripcion2'
      },
      {
        id: 3,
        titulo: 'titulo3',
        descripcion: 'descripcion3'
      }
    ]
  }

  addTask = task => {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks: tasks
    })
  }

  backToMainMenu = () => {
    this.setState({
      creating: false,
      editing: false
    });
  }

  newTaskMenu = () => {
    this.setState({
      creating: true
    });
  }

  editTaskMenu = (task) => {
    this.setState({
      editing: true,
      editingTask: task,
      indexEditingTask: this.state.tasks.indexOf(task)
    });
  }

  editTask = (oldTask, newTask) => {
    let tasks = this.state.tasks;
    let index = this.state.tasks.findIndex(task => task.id === oldTask.id);

    console.log(index);

    tasks.splice(index, 1, newTask);
    this.setState({
      tasks: tasks
    });
  }

  deleteTask = task => {
    let tasks = this.state.tasks;
    let index = this.state.tasks.findIndex(t => t.id === task.id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
  }

  getLastId = () => {
    let lastTask = 0;
    if (this.state.tasks.length > 0) {
      lastTask = this.state.tasks[this.state.tasks.length-1];
    }
    return lastTask.id;
  }

  render() {
    if (this.state.editing) {
      return (
        <EditingScreen
          backToMainMenu = {this.backToMainMenu}
          editTask = {this.editTask}
          deleteTask = {this.deleteTask}
          titulo = {this.state.editingTask.titulo}
          descripcion = {this.state.editingTask.descripcion}
          id = {this.state.editingTask.id}
        />
      )
    }
    else if (this.state.creating) {
      return (
        <CreatingScreen
          addTask = {this.addTask}
          backToMainMenu = {this.backToMainMenu}
          getLastId = {this.getLastId}
        />
      );
    }
    else {
      return (
        <div className="container">
          <div className='d-flex gap-3 justify-content-center mt-5'>
            <h1>Task App</h1>
            <button onClick={this.newTaskMenu} className='btn btn-primary'>
                Añadir nueva tarea
            </button>
          </div>
          <div className='d-flex flex-column gap-5 align-items-center text-center mt-5'>
              {
                this.state.tasks.map(task => {
                  return (
                    <Task
                      key = {task.id}
                      titulo = {task.titulo}
                      descripcion = {task.descripcion}
                      id = {task.id}
                      editTaskMenu = {this.editTaskMenu}
                    />
                  );
                })
              }
          </div>
        </div>
      );
    }
  }
}

export default App;
