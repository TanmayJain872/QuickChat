/* jshint esversion : 9 */

import React from 'react';
import { Avatar, Badge, Collapse, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

// Redux Toolkit code
import { useSelector, useDispatch, useStore } from "react-redux";
import store from '../app/Store';
import {selectContact} from '../features/contacts/ContactSlice';


const ConversationsList = (props) => {

    const [open, setOpen] = React.useState(props.open);
    let chats = useSelector(state => state.contact.contacts);
    let currentChatID = useSelector(state => state.contact.contactIDofSelectedContact);
    // const store = useStore();
    // let currentChatID = store.getState().contact.selectedContact;
    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List 
            component="div"
            aria-labelledby="nested-list-subheader"
            disablePadding
            sx={{ 
                // justifySelf: props.justifySelf,
                width: '110%', 
                maxWidth: 364, 
                maxHeight: 186, 
                bgcolor: 'background.paper', 
                ml: -2,
                overflow: 'auto'
            }}
        >
            <ListItemButton disableRipple onClick={handleClick}> 
                <ListItemText primary={props.status + " Conversations"} />
                {/* <ListItemText primary={props.typeOfChatList} /> */}
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="nav" disablePadding>

                {
                    chats.filter(chat => chat.status === props.status ? chat : null).map((chat) => {
                    {/* props.chats.map((chat) => { */}
                        return (
                            <ListItemButton 
                                key={chat.contactID}
                                selected={chat.contactID === currentChatID ? true : false}
                                sx={{ 
                                    pl: 4, 
                                }}
                                onClick={() => {
                                    dispatch(selectContact(chat.contactID));
                                }}
                            >
                                <ListItemAvatar>
                                    <Avatar alt='Henry Boyd' sx={{ width: 30, height: 30 }}>
                                        {chat.name.split(' ')[0][0] + chat.name.split(' ')[1][0]}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={chat.name} primaryTypographyProps={{ fontSize: '14px' }} />
                            </ListItemButton>
                        )
                    })
                }

                </List>
            </Collapse>

        </List>
    )
}

export default ConversationsList;
