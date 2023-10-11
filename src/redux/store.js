import { configureStore } from '@reduxjs/toolkit';


import { contactsReducer } from './sliceContacts';
import { filtersReducer } from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});


export default store;

