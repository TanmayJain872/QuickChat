/*jshint esversion: 9 */

import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3d5afe', // Indigo
      light: '#cbdfff',
      // main: '#82b1ff', // Indigo 50
      // main: '#e8eaf6' // Indigo 50
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#7e57c2',
      light: '#efe7f6',
      contrastText: '#000000'
    },
    warning: {
        main: '#ff5722',
        light: '#fff3e0'
    },
    success: {
        main: '#1dc9b6',
        light: '#dfffff'
    },
    info: {
        main: '#2196f3', // Blue
        contrastText: '#000000'
    },
    text: {
        primary: 'rgba( 0, 0, 0, 0.87)',
        secondary: 'rgba( 0, 0, 0, 0.6)',
        disabled: 'rgba( 0, 0, 0, 0.38)'
    }
    
  },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    // fontFamily: {
    //   primary: '"Roboto","Helvetica","Arial",sans-serif',
    //   secondary: 'Calibri (Body)'
    // },
    button: {
        textTransform: 'none',
        fontSize: '10px',
        fontWeight: '540',
        // fontFamily: {
        //   main: 'calibri'
        // }
    }
  }
});

export { ThemeProvider };

