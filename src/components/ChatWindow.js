/* jshint esversion: 9 */

import React from 'react';
import { Box } from '@mui/system';
import { MessageBar } from './MessageBar';
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

export const ChatWindow = () => {
    return (
        <Box 
            component='div'
            sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignContent: 'flex-end',
                backgroundColor: 'grey.50',
                border: 1,
                borderRadius: '16px',
                borderColor: 'grey.300',
                color: 'white',
                height: '620px',
                width: '846px',
                padding: '16px',
                overflowY: 'scroll',
                mx: 3
            }}
        >
            {/* <div style={{textAlign: 'right'}}>
                <SentMessage />
            </div> */}
            <ReceivedMessage />
            <SentMessage />
            <MessageBar />
        </Box>
    )
}


