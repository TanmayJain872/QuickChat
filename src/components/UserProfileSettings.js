/* jshint esversion: 9 */

import React from 'react';
import { Avatar, Box, Container, Stack, Typography, IconButton, FormControlLabel } from '@mui/material';
import { AntSwitch } from './CustomizedSwitches';
// import OfflineBoltSharpIcon from '@mui/icons-material/OfflineBoltSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export const UserProfileSettings = () => {
    
    return (
            // <Box spacing={0.5} sx={{
            <Stack display='flex' alignItems='center' spacing={0.5} sx={{
                // display: 'flex',
                // flexDirection: 'column',
                // alignContent: 'center',
                backgroundColor: 'grey.50',
                border: 1,
                borderRadius: '16px',
                borderColor: 'grey.300',
                color: 'white',
                height: '159px',
                // width: '175px',
                width: {
                    xs: 5, // 0
                    sm: 25, // 600
                    md: 75, // 900
                    lg: 125, // 1200
                    xl: 175, // 1536
                },
                marginTop: '15px',
                mb: 2,
                padding: '18px'
            }}>
                <Avatar alt='Dwayne Johnson' src='dwayne-the-rock.jpg' sx={{ width: 75, height: 75 }}>Dwayne Johnson</Avatar>
                <Typography component='div' sx={{ 
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    textAlign: 'left'
                }}>
                    {/* Paul Leveque */}
                    {/* Michael Hickenbottom */}
                    Dwayne Johnson
                    <IconButton 
                        aria-label='settings' 
                        // disableRipple
                        // disableElevation 
                        sx={{ 
                            color: 'secondary.contrastText',
                            ml: -0.5,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}
                    >
                        <SettingsOutlinedIcon sx={{ fontSize: '18px', '&.MuiSvgIcon-root': {transform: 'rotate(90deg)'} }} />
                    </IconButton>
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
                    control={<AntSwitch defaultChecked size='small' sx={{ colo: 'indigo' }} />} 
                    // label='Active'
                    label={<Typography variant="body2" color='#999999' sx={{ fontSize: '11px', marginLeft: '5px' }}>Active</Typography>} 
                    labelPlacement='end' 
                    />
            {/* </Box> */}
            </Stack>
    )
};


