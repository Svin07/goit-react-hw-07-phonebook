import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getAllContacts } from '../api';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}




export const getContactsFromBack = createAsyncThunk('contacts/getContactsFromBack', async () => { return await getAllContacts() })

export const removeContact = createAsyncThunk('contacts/removeContact', async (id) => { return await deleteContact(id) })

export const addNewContact = createAsyncThunk('contacts/addNewContact', async(newContact)=>{return await addContact(newContact)})

const handlePending = (state) => { state.isLoading = true }
const handleRejected = (state, action) => {state.isLoading = false;
        state.error = action.payload.message}

const sliceContacts = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getContactsFromBack.pending, handlePending)
      
      .addCase(getContactsFromBack.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload.data
      })
      .addCase(getContactsFromBack.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
          })
      .addCase(removeContact.rejected, handleRejected)
      .addCase(addNewContact.pending, handlePending)
      .addCase(addNewContact.fulfilled,(state) => {
        state.isLoading = false;
        state.error = null;
         getContactsFromBack();
          })
      .addCase(addNewContact.rejected, handleRejected)
  
  }


})
  
    export const contactsReducer = sliceContacts.reducer;