/* jshint esversion: 9 */

import { Box, Button, IconButton, InputAdornment, Menu, MenuItem, TextareaAutosize, Tooltip } from '@mui/material';
import { TextField } from '@material-ui/core';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import AttachFile from '@mui/icons-material/AttachFile';
import SendRounded from '@mui/icons-material/SendRounded';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

import { sendMessage } from '../features/message/MessageSlice';
import { useDispatch } from 'react-redux';


export const MessageBar = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [text, setText] = useState('');
    const textFieldRef = useRef(null);

    const dispatch = useDispatch();
    // let { dispatch } = props;

    const handleClick = event => {
        anchorEl === null ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
    };

    useEffect(() => {
        textFieldRef.current.focus();
    }, [text]);

    return (
        <Box 
            component='div'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fffffc',
                boxShadow: 1,
                borderRadius: '10px',
                height: '40px',
                width: '830px',
                p: 1,
                mt: 1
            }}
        >
            <Tooltip title='Attachments' placement='top'>
                <IconButton
                    id='attachment-button'
                    aria-label='attachment-button' 
                    onClick={handleClick}
                >
                    <AttachFile fontSize='medium' sx={{ color: 'grey.500', mr: 0.5, '&.MuiSvgIcon-root': {transform: 'rotate(40deg)'} }} />
                </IconButton>
            </Tooltip>
            <Menu
                id='attachment-menu'
                anchorEl={anchorEl}
                anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'top'
                }}
                transformOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom'
                }}
                open={open}
                onClose={handleClick}
                MenuListProps={{
                    'aria-labelledby': 'attachment-button',
                }}
            >
                <MenuItem>Browse computer</MenuItem>
                <MenuItem>Upload from web</MenuItem>
            </Menu>
            <TextField 
                id="filled-basic" 
                label="Enter your message here" 
                variant="outlined" 
                size='small'
                maxRows='2'
                multiline
                inputRef={textFieldRef}
                // margin='normal'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Tooltip title='Emoji' placement='top'>
                                <IconButton sx={{ borderRadius: '20px', padding: '1px' }}>
                                    <SentimentSatisfiedOutlinedIcon sx={{ color: '#ffc400' }} />
                                </IconButton>
                            </Tooltip>
                        </InputAdornment>
                    ),
                }}
                value={text}
                onChange={event => setText(event.target.value)}
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
                    width: '660px'
                    // width: 'auto'
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
                    ml: 1,
                    // justifySelf: 'flex-end'
                }}
                onClick={(event) => { 
                    console.log(event);
                    dispatch(sendMessage(text));
                    setText('');
                }}
            >
                Send
            </Button>
        </Box>
    )
}

