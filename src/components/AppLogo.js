/* jshint esversion: 9 */

import React from 'react';
import { Stack, Typography } from '@mui/material';
import OfflineBoltSharpIcon from '@mui/icons-material/OfflineBoltSharp';

export const AppLogo = () => {
    return (
        <Stack direction='row' display='flex' alignItems='center' spacing={1}>
            <OfflineBoltSharpIcon 
                // color='primary'
                // aria-label='logo'
                sx={{ 
                    fontSize: "50px", 
                    color: 'primary.light', 
                    backgroundColor: 'primary.main',
                    borderRadius: '25px' 
                }}
            />
            <Typography variant='h6' component='h1' sx={{ 
                fontWeight: 'bold',
                fontSize: '20px',
                flexGrow: 1,
            }}>
                QuickChat
            </Typography>
        </Stack>
    )
};


