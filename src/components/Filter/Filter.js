import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { addFilter } from 'redux/filtersSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };

  return (
    <div>
      <h6>Find contacts by name</h6>
      <label htmlFor="exampleInputFilter"></label>
      <input
        className={css.input}
        id="exampleInputFilter"
        name="text"
        onChange={handleChange}
      ></input>
    </div>
  );
}
