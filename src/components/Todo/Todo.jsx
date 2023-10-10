// import { FaCheckDouble, FaHeart } from 'react-icons/fa';
// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from '../../redux/actions';

import { CloseButton } from 'react-bootstrap';

export const Todo = ({ todo: { id, text, completed } }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted(id));
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        onChange={handleToggle}
        checked={completed}
      />
      <span className="ms-3">{text}</span>
      <CloseButton
        className="ms-auto"
        aria-label="Delete"
        onClick={handleDelete}
      />
    </>
  );
};
