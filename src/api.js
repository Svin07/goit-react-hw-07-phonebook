import axios from 'axios';

axios.defaults.baseURL = 'https://65240d93ea560a22a4e950d9.mockapi.io';

export const getAllContacts = async () => {
  const data = await axios.get('/Contacts');
  return data;
};

export const deleteContact = async id => {
  const data = await axios.delete(`/Contacts/${id}`);
  return data;
};

export const addContact = async newContact => {
  const data = await axios.post('/Contacts', newContact);
  return data;
};
