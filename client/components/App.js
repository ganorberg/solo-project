import React, { Component } from 'react';
import Input from './Input';
import Todo from './Todo';

// const TodoController = require('../../server/todoController');
let todoList = require('../../database/mockData');

let todoId = 2;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(val) {
    const todo = { text: val, id: todoId++ }
    todoList.push(todo);

    fetch('/todoData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(response => response.json())
    .catch(err => console.log(err))

    this.setState({taskList: todoList});
  }

  removeTodo(id) {
    // Filter all todos except the one to be removed
    todoList = todoList.filter(todo => {
      if (todo.id !== id) return todo;
    });

    this.setState({taskList: todoList});
  }

  componentDidMount() {
    this.setState({ taskList: todoList });
  }

  render() {
    const todoComponents = this.state.taskList.map(todo => {
      return <Todo key={todo.id} todo={todo} removeTodo={this.removeTodo} />;
    });

    return (
      <div>
        <Input addTodo={this.addTodo} key='input' />
        <ul>{todoComponents}</ul>
      </div>
    );
  }
}

export default App;