import { Button, ButtonGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';

import { getStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/actions';

const Filter = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <ButtonGroup className="mb-3" aria-label="Basic example">
      <Button
        type="button"
        variant="secondary"
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        type="button"
        variant="secondary"
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        type="button"
        variant="secondary"
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
