import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      prepare: contacts => {
        const id = nanoid();
        return { payload: { id, ...contacts } };
      },
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
