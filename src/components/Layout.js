/* jshint esversion: 9 */

import React, { useReducer } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { theme, ThemeProvider } from './QuickChatTheme';
import { AppLogo } from './AppLogo';
import { UserProfileSettings } from './UserProfileSettings';
import ConversationsList from './ConversationsList';
import { ChatWindow } from './ChatWindow';
import SharingInviteLink from './SharingInviteLink';
import SelectedContactDetails from './SelectedContactDetails';
import { MeetingsDetails } from './MeetingsDetails';

// Redux Toolkit code
import redux from '@reduxjs/toolkit';


export const Layout = () => {

    return (
        <ThemeProvider theme={theme}>
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                backgroundColor: 'primary.contrastText',
                boxShadow: 1,
                borderRadius: '16px',
                color: 'black',
                height: '670px',
                width: '1350px',
                // width: {
                //     xs: 350,
                //     sm: 550,
                //     md: 700,
                //     lg: 1000,
                //     xl: 1350
                // },
                paddingTop: '20px',
                px: '20px'
            }}
        >

            {/* COLUMN 1 STARTS */}
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                flexWrap: 'wrap',
                flexShrink: 1,
                alignItems: 'flex-start' 
            }}>
                <AppLogo />
                <UserProfileSettings />
                <ConversationsList 
                    status='Active'
                    open={true}
                />
                <ConversationsList 
                    status='Archived'
                    open={false}
                    // justifySelf='flex-end'
                />
            </Box>
            {/* COLUMN 1 ENDS */}

            {/* COLUMN 2 STARTS */}
            <ChatWindow />
            {/* COLUMN 2 ENDS */}

            {/* COLUMN 3 STARTS */}
            <Stack display='flex' flexWrap='wrap' flexShrink={1} spacing={2}>
                <SelectedContactDetails />
                <MeetingsDetails />
                <SharingInviteLink />
            </Stack>
            {/* COLUMN 3 ENDS */}

        </Box>
        </ThemeProvider>
    )       
}


