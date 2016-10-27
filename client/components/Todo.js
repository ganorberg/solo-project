import React, { Component } from 'react';

const Todo = ({todo, removeTodo}) => {
  return (<li className="todo" onClick={() => {removeTodo(todo.id)}}>{todo.text}</li>);
}

Todo.propTypes = {
    todo: React.PropTypes.object,
    removeTodo: React.PropTypes.func
}

export default Todo