import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getAllContacts } from '../api';

export const getContactsFromBack = createAsyncThunk(
  'contacts/getContactsFromBack',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await deleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await addContact(newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
