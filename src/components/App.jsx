import { Component } from 'react';
import { TodoList } from './TodoList/TodoList';
import { nanoid } from 'nanoid';
import Header from './Header/Header';
import AddForm from './AddForm/AddForm';
import Filter from './Filter/Filter';
import { TaskCounter } from './TaskCounter/TaskCounter';

export class App extends Component {
  state = {
    tasks: [
      { id: nanoid(), text: 'Learn HTML and CSS', complited: true },
      { id: nanoid(), text: 'Learn JavaScript', complited: true },
      { id: nanoid(), text: 'Learn React', complited: true },
    ],
    filters: {
      status: 'all',
    },
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          <div className="d-flex justify-content-between">
            <TaskCounter />
            <Filter />
          </div>
          <AddForm />
          <TodoList />
        </div>
      </div>
    );
  }
}
