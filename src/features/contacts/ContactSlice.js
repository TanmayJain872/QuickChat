/* jshint esversion: 11 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    contacts: [
        {contactID: 301101, name: 'Henry Boyd', status: 'Active', emailID: 'henryboyd@gmail.com'}, 
        {contactID: 301121, name: 'Martha Curtis', status: 'Active', emailID: 'martha.curtis@gmail.com'}, 
        {contactID: 301212, name: 'Philip Tucker', status: 'Active', emailID: 'philiptucker1@outlook.com'},
        {contactID: 301213, name: 'Christine Reid', status: 'Active', emailID: 'r.christine@outlook.com'},
        {contactID: 301223, name: 'Jerry Guzman', status: 'Active', emailID: 'jerry.g@yahoo.co.in'},
        {contactID: 301185, name: 'Russell Williams', status: 'Active', emailID: 'russellwilliams823@gmail.com'},
        {contactID: 301075, name: 'Bill Bradford', status: 'Archived', emailID: 'bill.b489@gmail.com'}, 
        {contactID: 301144, name: 'Steve Jobs', status: 'Archived', emailID: 'appleexceo@gmail.com'}, 
        {contactID: 301005, name: 'Rohit Sharma', status: 'Archived', emailID: 'rohitsharma41@gmail.com'},
        {contactID: 301006, name: 'Varun Sharma', status: 'Archived', emailID: 'varunsharma46@gmail.com'},
    ],
    error: ''
};

initialState.contactIDofSelectedContact = initialState.contacts[0].contactID;

// export const fetchContacts = createAsyncThunk("contact/fetchContacts", () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(users => users.map(user => user.id));
// });

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        selectContact: (state, action) => {
            state.contactIDofSelectedContact = action.payload;
        }
    },
    // extraReducers: builder => {
    //     builder.addCase(fetchContacts.pending, state => {
    //         state.loading = true;
    //     });
    //     builder.addCase(fetchContacts.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.contacts = action.payload;
    //         state.error = "";
    //     });
    //     builder.addCase(fetchContacts.rejected, (state, action) => {
    //         state.loading = false;
    //         state.contacts = [];
    //         state.error = action.error.message;
    //     });
    // }
});


export default contactSlice.reducer;
export const { selectContact } = contactSlice.actions;