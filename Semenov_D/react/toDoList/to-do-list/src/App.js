import React, { Component } from 'react';
import './App.css';
import TaskCard from './TaskCard/TaskCard';
import AddTask from './AddTask/AddTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: '1', task: 'Task1', isChecked: false },
        { id: '2', task: 'Task2', isChecked: false },
        { id: '3', task: 'Task3', isChecked: false },
        { id: '4', task: 'Task4', isChecked: false }
      ],
      inputState: { input: ' ' }
    };
  }




  taskComplitedFunc = (id) => {

    const updatedState = this.state.list.map((taskObj) => {
      var copy = { ...taskObj };
      if (copy.id === id) {
        copy.isChecked = !copy.isChecked;
      }
      return copy;
    })
    this.setState({ list: updatedState })
  }

  changeInput = (event) => {
    const value = event.target.value;
    let filteredValue;
    if (value.length >= 6) {
      filteredValue = value.slice(0, 6);
    } else {
      filteredValue = value;
    }
    this.setState({ input: filteredValue });
  }


  render() {
    const reactUserElements = this.state.list.map(task => (
      <TaskCard task={task} key={task.id} checkboxToggle={this.taskComplitedFunc}></TaskCard>
    ));
    return (
      <ul className="taskList">
        {reactUserElements}
        <AddTask onInputChange={this.changedInput} value={this.state.input} />
      </ul>
    );
  }
}

export default App;
