import { Component } from 'react';
import { TodoList } from './TodoList/TodoList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    todoList: [
      { id: nanoid(), name: 'Learn HTML and CSS' },
      { id: nanoid(), name: 'Learn JavaScript' },
      { id: nanoid(), name: 'Learn React' },
    ],
  };

  render() {
    return (
      <>
        <TodoList items={this.state.todoList} />
      </>
    );
  }
}
