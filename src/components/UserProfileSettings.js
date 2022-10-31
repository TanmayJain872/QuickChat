/* jshint esversion: 9 */

import React, { useState } from 'react';
import { Avatar, Box, Container, Stack, Typography, IconButton, Menu, MenuList, MenuItem, Tooltip, FormControlLabel } from '@mui/material';
import { AntSwitch } from './CustomizedSwitches';
// import OfflineBoltSharpIcon from '@mui/icons-material/OfflineBoltSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export const UserProfileSettings = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        anchorEl === null ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
    };
    
    return (
            // <Box spacing={0.5} sx={{
            <Stack display='flex' flexWrap='wrap' flexShrink={1} alignItems='center' spacing={0.5} sx={{
                // alignContent: 'center',
                backgroundColor: 'grey.50',
                border: 1,
                borderRadius: '16px',
                borderColor: 'grey.300',
                color: 'white',
                height: '159px',
                width: '175px',
                // width: {
                //     xs: 5, // 0
                //     sm: 25, // 600
                //     md: 75, // 900
                //     lg: 125, // 1200
                //     xl: 175, // 1536
                // },
                marginTop: '15px',
                mb: 2,
                padding: '18px'
            }}>
                <Avatar alt='Dwayne Johnson' src='dwayne-the-rock.jpg' sx={{ width: 75, height: 75 }} />
                <Typography component='div' sx={{ 
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    textAlign: 'left'
                }}>
                    Dwayne Johnson
                    <Tooltip title='Menu' placement='right'>
                        <IconButton 
                            id='menu-button'
                            aria-label='menu-button' 
                            // disableRipple
                            // disableElevation 
                            sx={{ 
                                color: 'secondary.contrastText',
                                ml: -0.5,
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }
                            }}
                            // aria-controls={open ? 'basic-menu' : undefined}
                            // aria-haspopup="true"
                            // aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <SettingsOutlinedIcon sx={{ fontSize: '18px', '&.MuiSvgIcon-root': {transform: 'rotate(90deg)'} }} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClick}
                        MenuListProps={{
                            'aria-labelledby': 'menu-button',
                        }}
                    >
                        <MenuItem divider>Edit Profile</MenuItem>
                        <MenuItem divider>Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Typography>
                <Typography 
                    color='#999999'
                    sx={{
                        fontWeight: 'normal',
                        fontSize: '11px',
                        textAlign: 'left'
                    }}
                    >
                    Lead UX/UI Designer
                </Typography>
                <FormControlLabel 
                    value='end' 
                    control={<AntSwitch defaultChecked size='small' />} 
                    label={<Typography variant="body2" color='#999999' sx={{ fontSize: '11px', marginLeft: '5px' }}>Active</Typography>} 
                    labelPlacement='end' 
                />
            {/* </Box> */}
            </Stack>
    )
};


