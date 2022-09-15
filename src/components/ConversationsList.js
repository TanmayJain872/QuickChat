/* jshint esversion : 9 */

import React from 'react';
import { Avatar, Badge, Collapse, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

const ConversationsList = (props) => {

    const [open, setOpen] = React.useState(true);
    // let chatComponent = <ListItemButton selected sx={{ 
    //                                 pl: 4, 
    //                             }}
    //                         >
    //                             <ListItemAvatar>
    //                                 <Avatar alt='Henry Boyd' sx={{ width: 30, height: 30 }}>
    //                                     {chat.name.split(' ')[0][0] + chat.name.split(' ')[1][0]}
    //                                 </Avatar>
    //                             </ListItemAvatar>
    //                             <ListItemText primary={chat.name} primaryTypographyProps={{ fontSize: '14px' }} />
    //                         </ListItemButton>
    //                     })
    //                 ;

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List 
            sx={{ width: '110%', maxWidth: 360, maxHeight: '100%', bgcolor: 'background.paper', ml: -2, overflow: 'auto' }} // background.paper
            component="div"
            aria-labelledby="nested-list-subheader"
            disablePadding
        >
            <ListItemButton disableRipple onClick={handleClick}> 
                <ListItemText primary={props.chatTitle} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="nav" disablePadding>

                {
                    props.chats.map((chat) => {
                        return <ListItemButton selected sx={{ 
                                pl: 4, 
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar alt='Henry Boyd' sx={{ width: 30, height: 30 }}>
                                    {chat.name.split(' ')[0][0] + chat.name.split(' ')[1][0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chat.name} primaryTypographyProps={{ fontSize: '14px' }} />
                        </ListItemButton>
                    })
                }

                </List>
            </Collapse>

        </List>
    )
}

export default ConversationsList;
