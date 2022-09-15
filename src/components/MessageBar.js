/* jshint esversion: 9 */

import { Box, Button, InputAdornment, TextareaAutosize } from '@mui/material';
import { TextField } from '@material-ui/core';
import React, { useReducer, useRef } from 'react';
import AttachFile from '@mui/icons-material/AttachFile';
import SendRounded from '@mui/icons-material/SendRounded';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

const initialState = '';

const reducer = (currentState, action) => {
    switch(action.decision) {
        case 'send':
            return action.message;
        default:
            return '';
    }
};

export const MessageBar = () => {

    const [messageToBeSent, dispatch] = useReducer(reducer, initialState);
    const textFieldRef = useRef(null);

    return (
        <Box 
            alignItems='center'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                flexGrow: 1,
                backgroundColor: '#fffffc',
                boxShadow: 1,
                borderRadius: '10px',
                height: '60px',
                width: '819px',
                px: 1,
                mt: 1
            }}
        >
            <AttachFile fontSize='medium' sx={{ color: 'grey.500', mr: 0.5, '&.MuiSvgIcon-root': {transform: 'rotate(40deg)'} }} />
            <TextField 
                id="filled-basic" 
                label="Enter your message here" 
                variant="outlined" 
                size='small'
                maxRows='2'
                multiline
                ref={textFieldRef}
                // margin='normal'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ color: '#ffc400' }}>
                            <SentimentSatisfiedOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
                // sx={{
                //     mx: 1.5,
                //     my: 0.5,
                //     borderRadius: '5px',
                //     width: '650px'
                // }}
                style={{
                    // mx: 1.5,
                    // my: 0.5,
                    borderRadius: '5px',
                    width: '650px'
                }}
            />
            {/* <TextareaAutosize 
                aria-label='Message Text Area'
                placeholder='Type a message'
            /> */}
            <Button 
                variant='contained' 
                color='primary' 
                size='large'
                endIcon={<SendRounded fontSize='medium' />}
                sx={{
                    borderRadius: '5px',
                    fontSize: '14px',
                    ml: 0.5
                }}
                onClick={event => dispatch({ decision: 'send', message: '' })}
            >
                Send
            </Button>
        </Box>
    )
}

