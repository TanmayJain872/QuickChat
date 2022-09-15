/* jshint esversion: 9 */

import React, { useReducer } from 'react';
import redux from 'redux';
import { Box, Stack } from '@mui/material';
import { theme, ThemeProvider } from './QuickChatTheme';
import { AppLogo } from './AppLogo';
import { UserProfileSettings } from './UserProfileSettings';
import ConversationsList from './ConversationsList';
import { ChatWindow } from './ChatWindow';
import SharingInviteLink from './SharingInviteLink';
import ContactPersonDetails from './ContactPersonDetails';
import { MeetingsDetails } from './MeetingsDetails';


let chats = [
    {name: 'Henry Boyd', status: 'active', isSelected: true, type: 'selected', emailID: 'henryboyd@gmail.com'}, 
    {name: 'Steve Austin', status: 'active', isSelected: false, type: 'unselected', emailID: 'steveaustin@gmail.com'}, 
    {name: 'Paul Leveque', status: 'active', isSelected: false, type: 'unselected', emailID: 'paulleveque@gmail.com'},
    {name: 'Tim Allen', status: 'archived', isSelected: false, type: 'unselected', emailID: 'timallen@gmail.com'}, 
    {name: 'Steve Jobs', status: 'archived', isSelected: false, type: 'unselected', emailID: 'stevejobs@gmail.com'}, 
    {name: 'Rohit Sharma', status: 'archived', isSelected: false, type: 'unselected', emailID: 'rohitsharma@gmail.com'}
];

const initialState = {};

const getSelectedChat = (chats) => { 
    for (const chat of chats) {
        return chat.type === 'selected' ? chat : null;
    }
};

const reducer = (previousState, action) => {
    switch(action.type) {
        case 'selected':
            return { chat: action.chat };
        default:
            return previousState;
    }
};


export const Layout = () => {

    // let [selectedChat, dispatch] =  useReducer(reducer, initialState);
    // console.log(getSelectedChat(chats));
    let selectedChat = getSelectedChat(chats);

    return (
        <ThemeProvider theme={theme}>
        <Box 
            spacing={5}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                flexGrow: 1,
                position: 'relative',
                backgroundColor: 'primary.contrastText',
                boxShadow: 1,
                borderRadius: '16px',
                color: 'black',
                height: '670px',
                // width: '1350px',
                width: {
                    xs: 350,
                    sm: 550,
                    md: 110,
                    lg: 1000,
                    xl: 1350
                },
                paddingTop: '20px',
                px: '20px'
            }}
        >
            {/* COLUMN 1 STARTS */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <AppLogo />
                <UserProfileSettings />
                <ConversationsList 
                    chatTitle='Active Conversations' 
                    chats={
                        chats.filter((chat) => chat.status === 'active' ? chat : null)
                    } 

                />
                <ConversationsList 
                    chatTitle='Archived Conversations' 
                    chats={
                        chats.filter((chat) => chat.status === 'archived' ? chat : null)
                    } 

                />
            </Box>
            {/* COLUMN 1 ENDS */}
            {/* COLUMN 2 STARTS */}
            <ChatWindow />
            {/* COLUMN 2 ENDS */}
            {/* COLUMN 3 STARTS */}
            <Stack spacing={2}>
                {/* <ContactPersonDetails chat={() => dispatch({ type: getSelectedChat(chats).type, chat: getSelectedChat(chats) })} /> */}
                <ContactPersonDetails chat={selectedChat} />
                <MeetingsDetails />
                <SharingInviteLink />
            </Stack>
            {/* COLUMN 3 ENDS */}
        </Box>
        </ThemeProvider>
  )
}


