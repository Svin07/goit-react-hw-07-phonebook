import ContactList from './ContsctList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { getIsError, getIsLoading } from 'redux/selectors';

export function App() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getIsError);

  
  return (
    <div style={{
          height: 4000,
          margin: 15,
          padding: '12px 16px',
          borderRadius: 4,
          backgroundColor: 'gray',
          color: 'white',
    }}>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
          <ContactList />
        </div>
  );

}

