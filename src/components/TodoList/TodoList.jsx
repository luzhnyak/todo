import { Todo } from '../Todo/Todo';

export const TodoList = ({ items }) => {
  return (
    <>
      <h1>To Do</h1>
      <ul>
        {items.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};
