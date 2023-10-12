import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const defaultValue = '';

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    } else {
      dispatch(addNewContact({ name, number }));
    }

    setName(defaultValue);
    setNumber(defaultValue);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="exampleInputName"></label>
      <input
        type="text"
        className={css.input}
        id="exampleInputName"
        name="name"
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
      <label htmlFor="exampleInputNumder"></label>
      <input
        type="tel"
        className={css.input}
        id="exampleInputNumder"
        name="number"
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
      />

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
