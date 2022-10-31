/* jshint esversion: 11 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messageText: '',
    messages: [],
    // messages: {
        
    // },
    timeOfDelivery: ''
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            // state.messageText = action.payload;
            if (action.payload) state.messages.push(action.payload);
        }
    }
});


export default messageSlice.reducer;
export const { sendMessage } = messageSlice.actions;

// module.exports = messageSlice.reducer;
// module.exports.messageAction = messageSlice.actions;
