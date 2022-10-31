/* jshint esversion: 9 */

import React from 'react';
import { Avatar, Box, Stack, Typography, Button, IconButton, FormControlLabel } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import MailOutline from '@mui/icons-material/MailOutline';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';

import store from '../app/Store';
import { useSelector, useStore } from 'react-redux';


const getSelectedChat = (idOfRequiredChat, chats) => {
    for (let chat of chats) {
        if (chat.contactID === idOfRequiredChat) return chat;
    }
};

const SelectedContactDetails = () => {

    const chats = useSelector(state => state.contact.contacts);
    const selectedChatID = useSelector(state => state.contact.contactIDofSelectedContact);
    const chat = getSelectedChat(selectedChatID, chats);

    return (
        <Box 
            sx={{
                display: 'flex', 
                flexDirection: 'column',
                flexWrap: 'wrap',
                flexShrink: 1,
                backgroundColor: 'grey.50',
                border: 1,
                borderRadius: '16px',
                borderColor: 'grey.300',
                color: 'white',
                height: '159px',
                width: '175px',
                px: '15px',
                py: '12px'
            }}
        >
            <Avatar sx={{ bgcolor: '#cbdfff', width: 65, height: 65, alignSelf: 'center' }}>
                {chat.name.split(' ')[0][0] + chat.name.split(' ')[1][0]}
            </Avatar>

            <Stack direction='row' display='flex' alignItems='center' spacing={1} sx={{ mt: 1, mb:0.5 }}>

                <MailOutline fontSize='small' sx={{ color: 'text.primary' }} />
                <Typography gutterBottom={true} sx={{ color: 'text.secondary', fontSize: '11px', fontWeight: '530' }}>
                    {chat.emailID}
                </Typography>

            </Stack>

            <Stack direction='row' display='flex' alignItems='center' spacing={1} sx={{ mb: 0.65 }}>

                <AccountCircleOutlined fontSize='small' sx={{ color: 'text.primary' }} />
                <Typography gutterBottom={true} sx={{ color: 'text.secondary', fontSize: '11px', fontWeight: '530' }}>
                    {chat.name}
                </Typography>

            </Stack>

            <Button 
                variant='outlined' 
                size='medium' 
                color='primary' 
                endIcon={<DeleteOutlined />}
                sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '5px',
                    border: 1.5,
                    alignSelf: 'center',
                    fontWeight: '550'
                }}
            >
                { chat.status === 'Active' ? 'Archive' : 'Unarchive' }
            </Button>
        </Box>
    )
}

export default SelectedContactDetails;
