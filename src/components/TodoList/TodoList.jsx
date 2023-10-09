import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { Todo } from '../Todo/Todo';
import { statusFilters } from '../../redux/constants';
import { getTasks, getStatusFilter } from '../../redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TodoList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <>
      <ListGroup as="ul">
        {visibleTasks.map(todo => (
          <ListGroup.Item as="li" key={todo.id} className="d-flex g-4">
            <Todo todo={todo} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
