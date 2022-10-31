/* jshint esversion: 11 */

// React MUI components
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/system';

// Custom components
import { MessageBar } from './MessageBar';
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

// Redux Toolkit code
import redux from '@reduxjs/toolkit';
import { useSelector, useDispatch } from "react-redux";
import store from '../app/Store';


const defaultMessageToBeReceived = 'This is a chatbot. Please do not send message or reply to this chat.';

export const ChatWindow = () => {
    const listOfMessages = useSelector(state => state.message.messages);
    const dispatch = useDispatch();
    const scrollRef = useRef(null);

    useEffect(() => {
        // scrollRef.current?.scrollIntoView({ behaviour: "smooth" }); // Optional Chaining only available in ES11
        console.log(scrollRef.current);
        if (scrollRef.current.id === "scrollingDestination") scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }, [listOfMessages]);

    return (
        <Box component='div' sx={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '620px',
                width: '846px',
                backgroundColor: 'grey.50', 
                border: 1,
                borderRadius: '16px',
                borderColor: 'grey.300',
                p: 2, // 16px
            }}
        >
            <Box 
                component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // backgroundColor: 'grey.50',
                    color: 'white',
                    height: '552px',
                    width: '844px',
                    overflowY: 'auto',
                }}
            >
                {
                    listOfMessages.map(message => 
                        <>
                            <SentMessage messageToBeDisplayed={message} />
                            <ReceivedMessage 
                                messageToBeDisplayed={defaultMessageToBeReceived} 
                                totalMessages={listOfMessages.length} 
                            />
                        </>
                    )
                }
                <div id="scrollingDestination" ref={scrollRef} />
            </Box>
            <MessageBar dispatch={dispatch} />
        </Box>
    );
}


