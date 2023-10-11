import axios from "axios";

axios.defaults.baseURL = "https://65240d93ea560a22a4e950d9.mockapi.io";

export const getAllContacts =  async () => {
    const data = await axios.get("/Contacts", {
  method: 'GET',
  headers: {'content-type':'application/json'},
});
    return data
};

export const deleteContact =  async (id) => {
    const data = await axios.get(`"/Contacts/${id}"`, {
  method: 'DELETE',
  headers: {'content-type':'application/json'},
});
    return data
};


export const addContact =  async (newContact) => {
    const data = await axios.get("/Contacts", {
  method: 'POST',
  headers: {'content-type':'application/json'},
  
  body: JSON.stringify(newContact)
});
    return data
};

 


