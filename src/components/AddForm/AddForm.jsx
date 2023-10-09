import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { addTask } from '../../redux/actions';

const AddForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            name="text"
            placeholder="Enter task text..."
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Add ToDo
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default AddForm;
