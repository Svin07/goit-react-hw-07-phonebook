import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getAllContacts } from '../api';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}




export const getContactsFromBack = createAsyncThunk('contacts/getContactsFromBack', async (_, { rejectWithValue }) => {
  try {
    const data = await getAllContacts(); 
    return data;
  
} catch (error) { return rejectWithValue(error.message)
  
}  })

export const removeContact = createAsyncThunk('contacts/removeContact', async (id, {rejectWithValue}) => {
  try {
    const data = await deleteContact(id); 
    return data;
  
} catch (error) { return rejectWithValue(error.message)
  
}  })

export const addNewContact = createAsyncThunk('contacts/addNewContact', async(newContact, {rejectWithValue})=>{
  try {
    const data = await addContact(newContact); 
    return data;
  
} catch (error) { return rejectWithValue(error.message)
  
}  })

const handlePending = (state) => { state.isLoading = true }
const handleRejected = (state, action) => {state.isLoading = false;
        state.error = action.payload}

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
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        console.log(state.contacts);
        console.log(index);
      state.contacts.splice(index, 1);
          })
      .addCase(removeContact.rejected, handleRejected)
      .addCase(addNewContact.pending, handlePending)
      .addCase(addNewContact.fulfilled,(state, action) => {
        state.isLoading = false;
        state.error = null;
         state.contacts.push(action.payload.data)
          })
      .addCase(addNewContact.rejected, handleRejected)
  
  }


})
  
    export const contactsReducer = sliceContacts.reducer;