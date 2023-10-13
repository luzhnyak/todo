// import { FaCheckDouble, FaHeart } from 'react-icons/fa';
// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from '../../redux/operations';

import { CloseButton } from 'react-bootstrap';

export const Todo = ({ todo }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(todo.id));
  const handleToggle = () => dispatch(toggleCompleted(todo));
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        onChange={handleToggle}
        checked={todo.completed}
      />
      <span className="ms-3">{todo.text}</span>
      <CloseButton
        className="ms-auto"
        aria-label="Delete"
        onClick={handleDelete}
      />
    </>
  );
};
