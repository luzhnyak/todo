import { FaCheckDouble, FaHeart } from 'react-icons/fa';
import { Button, Item } from './Todo.styled';

export const Todo = ({ todo }) => {
  return (
    <Item>
      <input type="checkbox" />
      <span>{todo.name}</span>
      <Button>
        <FaHeart />
      </Button>
    </Item>
  );
};
