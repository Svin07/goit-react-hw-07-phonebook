import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact}>
      <h5 className={css.text}>{contact.name}:</h5>
      <p className={css.text}>{contact.number}</p>
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
