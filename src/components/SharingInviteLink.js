/* jshint esversion: 9 */

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from '@mui/icons-material/Link';

const SharingInviteLink = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                flexShrink: 1,
                alignItems: 'center',
                backgroundColor: 'grey.50',
                border: 1,
                borderRadius: '16px',
                borderColor: 'grey.300',
                height: '127px',
                width: '175px',
                px: '16px',
                py: '12px'
            }}
        >
            <Typography 
                variant='h6'
                component='h1'
                gutterBottom={true}
                color='text.primary'
                sx={{
                    fontWeight: 'bold',
                    fontSize: '16px'
                }}
            >
                Onboard Clients
            </Typography>
            <Typography 
                component='h1'
                paragraph={true}
                color='text.secondary'
                gutterBottom={true}
                sx={{
                    fontSize: '13px',
                    fontWeight: '500'
                }}
            >
                Share the link with prospects and discuss all stuff
            </Typography>
            <Button 
                variant='contained' 
                size='small' 
                color='primary' 
                endIcon={ <Link sx={{ '&.MuiSvgIcon-root': {transform: 'rotate(130deg)'} }} /> }
                sx={{
                    borderRadius: '5px',
                    height: '40px',
                    width: '120px'
                }}
            >
                Copy Link
            </Button>
        </Box>
    )
}

export default SharingInviteLink;