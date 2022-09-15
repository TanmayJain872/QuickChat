/* jshint esversion: 9 */

import React from 'react';
import { Avatar, Badge, Box, FormControl, FormHelperText, Typography } from '@mui/material';

// style={{ display: 'flex' }}

const SentMessage = (props) => {
    return (
        <Box component='div' sx={{ justifyContent: 'flex-end' }}>
            <FormControl>
                <Box
                    sx={{
                        color: '#f1f1f1',
                        fontSize: '0.8rem',
                        display: 'inline-flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignContent: 'flex-start',
                        bgcolor: '#282A35',
                        borderRadius: '10px',
                        position: 'relative',
                        maxWidth: '400px',
                        mr: 1,
                        p: 2
                    }}
                >
                    {/* Hi Henry !!
                    How are you doing this fine evening ?!
                    How are you doing this fine evening ?!
                    How are you doing this fine evening ?!
                    How are you doing this fine evening ?!
                    How are you doing this fine evening ?! */}
                    
                    <Typography sx={{ color: '#f1f1f1', fontSize: '0.8rem' }} >
                        {/* {props.message} */}
                        Hi Henry !!
                        How are you doing this fine evening ?!
                    </Typography>
                </Box>
                <FormHelperText sx={{ 
                    color: 'grey.500',
                    fontSize: '10px',
                    textAlign: 'right'
                }}>
                    9h ago
                </FormHelperText>
            </FormControl>
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
                <Avatar alt='Dwayne Johnson' src='dwayne-the-rock.jpg' />
            </Badge>
        </Box>
    )
}

export default SentMessage


