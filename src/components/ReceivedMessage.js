/* jshint esversion: 11 */

import React, { useEffect } from 'react';
import { Avatar, Badge, Box, FormControl, FormHelperText, Typography } from '@mui/material';

const ReceivedMessage = props => {
    return (
        <div style={{ alignSelf: 'flex-start' }}>
            <Badge
                overlap='circular' 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
                variant='dot'
                sx={{
                    '& .MuiBadge-dot': {
                        backgroundColor: '#1dc9b6',
                        color: '#ffffff',
                        boxShadow: `0 0 0 1px`
                    }
                }}
            >
                <Avatar alt='Henry Boyd'>HB</Avatar>
            </Badge>
            <FormControl>
                <Box
                    sx={{
                        color: '#282A35',
                        fontSize: '0.8rem',
                        display: 'inline-flex',
                        flexWrap: 'wrap',
                        flexShrink: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignContent: 'flex-start',
                        bgcolor: '#ffffff',
                        borderRadius: '10px',
                        boxShadow: 1,
                        maxWidth: '400px',
                        width: 'auto',
                        ml: 1,
                        p: 2
                    }}
                >
                    <Typography sx={{ color: '#282A35', fontSize: '0.8rem' }} >
                        {props.messageToBeDisplayed}
                        {/* Hi Dwayne !!
                        How are you doing this fine evening ?! */}
                        {/* Hi Dwayne !!
                        How are you doing this fine evening ?!
                        How are you doing this fine evening ?!
                        How are you doing this fine evening ?!
                        How are you doing this fine evening ?!
                        How are you doing this fine evening ?! */}
                    </Typography>
                </Box>
                <FormHelperText sx={{ 
                    color: 'grey.500',
                    fontSize: '10px',
                    textAlign: 'left'
                }}>
                    9h ago
                </FormHelperText>
            </FormControl>
        </div>
    )
}

export default ReceivedMessage;

