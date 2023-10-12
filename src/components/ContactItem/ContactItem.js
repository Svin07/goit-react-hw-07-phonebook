import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';

import { removeContact } from 'redux/operations';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <li className={css.contact}>
      <h5 className={css.text}>{contact.name}:</h5>
      <p className={css.text}>{contact.phone}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => handleDelete(contact.id)}
      >
        X
      </button>
    </li>
  );
}
