/* jshint esversion: 11 */

import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../features/message/MessageSlice';
import contactReducer from '../features/contacts/ContactSlice';

// import { createLogger } from 'redux-logger';
// const logger = createLogger();

const store = configureStore({
    reducer: {
        message: messageReducer,
        contact: contactReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
