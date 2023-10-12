import ContactItem from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsFromBack } from 'redux/operations';

function ContactList() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(getContactsFromBack());
  }, [dispatch]);

  const getFilteredContact = () => {
    return contactsList.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.contactlist}>
      {getFilteredContact().map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
