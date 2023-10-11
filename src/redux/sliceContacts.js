import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts } from '../api';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

export const getContactsFromBack = () => async (dispatch) => {
    try {
        dispatch(sliceContacts.actions.pending());
        const {data} = await getAllContacts();
        
        dispatch(sliceContacts.actions.fulfilled(data));
    } catch (error) {
        dispatch(sliceContacts.actions.rejected(error));
        
    }
   
}





const sliceContacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Виконається в момент старту HTTP-запиту
    pending: (state) => {state.isLoading = true},
    // Виконається якщо HTTP-запит завершився успішно
      fulfilled: (state, action) => {
          state.isLoading = false;
          state.error = null;
          
          state.contacts = action.payload
      },
    // Виконається якщо HTTP-запит завершився з помилкою
    rejected: (state, action) => {state.isLoading = false;
      state.error = action.payload.message;},
  },
});


// export const { pending, fulfilled, rejected } =
//     contactsSlice.actions;
  
    export const contactsReducer = sliceContacts.reducer;