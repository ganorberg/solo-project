import React, { Component } from 'react';

const Input = ({addTodo}) => {
  let input;
  
  return (
    <div>
      <input id="input" ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>+</button>
    </div>
  );
};

Input.propTypes = {
  addTodo: React.PropTypes.func
};

export default Input;