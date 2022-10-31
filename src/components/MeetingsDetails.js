/* jshint esversion: 9 */

import React from 'react';
import { Box, Stack, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import { theme, ThemeProvider } from './QuickChatTheme';


export const MeetingsDetails = () => {
    return (
        <Box spacing={1}
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexShrink: 1,
            // flexDirection: 'column',
            backgroundColor: 'grey.50',
            border: 1,
            borderRadius: '16px',
            borderColor: 'grey.300',
            color: 'white',
            height: '249px',
            width: '175px',
            overflowY: 'hidden',
            p: 2
        }}>
        <ThemeProvider theme={theme}>
        <Grid 
            container 
            spacing={0.5} 
            sx={{
                height: '10px'
            }}
        >
            <Grid item xs={6} >
                <Box 
                    alignItems='center' 
                    sx={{ 
                        display: 'flex', 
                        bgcolor: 'primary.light', 
                        borderRadius: '6px', 
                        height: '35px', 
                        width: '70px', 
                        p: 1,
                        color: 'primary.main' 
                    }}
                >
                    <AccessTimeIcon 
                        fontSize='small' 
                        sx={{ bgcolor: '#82b1ff', borderRadius: '15px', '&.MuiSvgIcon-root': { p: 0.5 } }}
                    />
                    <Stack spacing={-0.5} sx={{ ml: 0.5 }} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }} >13h</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#666666' }} >Time</Typography>
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={6} >
                <Box 
                    alignItems='center' 
                    sx={{ 
                        display: 'flex', 
                        bgcolor: 'success.light', 
                        borderRadius: '6px', 
                        height: '35px', 
                        width: '70px', 
                        p: 1,
                        color: 'success.main' 
                    }}
                >
                    <PeopleOutlineIcon 
                        fontSize='small' 
                        sx={{bgcolor: '#b2f9f2', borderRadius: '15px', '&.MuiSvgIcon-root': { p: 0.5 } }} 
                    />
                    <Stack display='flex' justifyContent='flex-start' spacing={-0.5} sx={{ ml: 0.5 }} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }} >188</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#666666' }} >Atendeed</Typography>
                    </Stack>
                </Box>
            </Grid>

            <Grid item minHeight='300vh' xs={6} sx={{ mt: 0 }} >
                <Box 
                    alignItems='center' 
                    // justifyContent='center' 
                    sx={{ 
                        display: 'flex', 
                        bgcolor: 'secondary.light', 
                        borderRadius: '6px', 
                        height: '35px', 
                        width: '70px', 
                        p: 1, 
                        color: 'secondary.main' 
                    }}
                >
                    <EventNoteOutlinedIcon 
                        fontSize='small' 
                        sx={{ bgcolor: '#d1c4e9', borderRadius: '15px', '&.MuiSvgIcon-root': { p: 0.5 } }}
                    />
                    <Stack spacing={-0.5} sx={{ ml: 0.5 }} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }} >119</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#666666' }} >Meetings</Typography>
                    </Stack>
                </Box>
            </Grid>

            <Grid item minHeight='300vh' xs={6} sx={{ mt: 0 }} >
                <Box 
                    alignItems='center' 
                    sx={{ 
                        display: 'flex', 
                        bgcolor: 'warning.light', 
                        borderRadius: '6px', 
                        height: '35px', 
                        width: '70px', 
                        p: 1, 
                        color: 'warning.main' 
                    }}
                >
                    <CancelPresentationIcon 
                        fontSize='small' 
                        sx={{ bgcolor: '#ffccbc', borderRadius: '15px', '&.MuiSvgIcon-root': { p: 0.5 } }} 
                    />
                    <Stack spacing={-0.5} sx={{ ml: 0.5 }} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }} >41</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#666666' }} >Rejected</Typography>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
        
        <Box spacing={0} sx={{ mt: 3 }} >
            <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing={8} sx={{ mb: 1 }} >
                <Typography sx={{ fontWeight: 'bold', fontSize: '12.5px', color: '#000000' }} >Current Week</Typography>
                <Typography sx={{ fontSize: '8.5px', color: '#666666' }} >Activity</Typography>
            </Stack>
        </Box>
        </ThemeProvider>

        </Box>
    )
};

