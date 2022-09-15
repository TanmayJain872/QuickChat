/* jshint esversion: 9 */

// import * as React from 'react';
import React from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
// import { theme } from './QuickChatTheme';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';


export const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
}));

export const IOSSwitch = styled((props: SwitchProps) => (
<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
width: 42,
height: 26,
padding: 0,
'& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
    transform: 'translateX(16px)',
    color: '#fff',
    '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
    },
    '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
    },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
    color: '#33cf4d',
    border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
    color:
        theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
},
'& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
},
'& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
    duration: 500,
    }),
},
}));

export const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 5,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                // backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff'
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 7,
        height: 6,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        // backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        // backgroundColor: theme.palette.mode === 'light' ? 'indigo' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));


// export default function CustomizedSwitches() {
//     return (
//         <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        // <FormGroup>
        //     <FormControlLabel
        //         control={<Android12Switch defaultChecked />}
        //         label="Android 12"
        //     />
        //     <FormControlLabel
        //         control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        //         label="iOS style"
        //     />
        //     <Stack direction="row" spacing={1} alignItems="center">
        //         <Typography>Off</Typography>
        //         <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        //         <Typography>On</Typography>
        //     </Stack>
        // </FormGroup>
//     );
// }