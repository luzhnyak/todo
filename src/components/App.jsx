import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTasks } from '../redux/operations';

import Header from './Header/Header';
import AddForm from './AddForm/AddForm';
import Filter from './Filter/Filter';
import { TodoList } from './TodoList/TodoList';
import { TaskCounter } from './TaskCounter/TaskCounter';

export const App = () => {
  const dispatch = useDispatch();

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

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
};
