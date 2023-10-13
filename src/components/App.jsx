import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../redux/operations';

import Header from './Header/Header';
import AddForm from './AddForm/AddForm';
import Filter from './Filter/Filter';
import { TodoList } from './TodoList/TodoList';
import { TaskCounter } from './TaskCounter/TaskCounter';
import { getIsLoading, getTasks } from '../redux/selectors';
import { CirclesWithBar } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const isLoading = useSelector(getIsLoading);

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
        {isLoading > 0 && (
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        )}
        {!isLoading && tasks.length > 0 && <TodoList />}
      </div>
    </div>
  );
};
