import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TodoList } from './TodoList/TodoList';

export class App extends Component {
  render() {
    return (
      <>
        <TodoList />
      </>
    );
  }
}
