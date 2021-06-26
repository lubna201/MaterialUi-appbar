import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

export const theme = createMuiTheme({
    palette: {
      common: {
        black: '#000',
        white:'#fff'},
        type:"light",
      primary: {
        main: '#5abb75',
        light: '#e28f77',
        dark: "#7ECA9C",
        contrastText: "#fff",
      },
      secondary: {
        main: "#d32626",
        light: '#583d79',
        dark: "#583d75",
        contrastText: "#fff",
      },
      text: {
        primary:'#000000',
        secondary: '#000000',
        light: '#fff',
        dark: "#000000",
        disabled:'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)',
        divider: 'rgba(255, 255, 255, 0.12)'},
    },
    
  typography: {
    fontFamily: "Comic Sans MS",
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',
    h1: {
      fontFamily: "Roboto",
      fontWeight: '300',
      fontSize: "6rem",
      lineHeight: '1.167',
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "Helvetica",
      fontWeight: '300',
      fontSize: "3.75rem",
      lineHeight: '1.2',
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: "Roboto",
      fontWeight: '400',
      fontSize: "3rem",
      lineHeight: '1.167',
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: '800',
      fontSize: "2.125rem",
      lineHeight: '1.235',
      letterSpacing: "0.00735em",
      [breakpoints.down('sm')]: {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontFamily: "Roboto",
      fontWeight: '800',
      fontSize: "1.5rem",
      lineHeight: '1.334',
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "Roboto",
      fontWeight: '800',
      fontSize: "1.25rem",
      lineHeight: '1.6',
      letterSpacing: "0.0075em",
      
    },
    subtitle1: {
      fontFamily: "Roboto", 
      fontWeight: '400',
      fontSize: "1rem",
      lineHeight: '1.75',
      letterSpacing: "0.00938em",
    },
    subtitle2:{
      fontFamily: "Roboto",
      fontWeight: '500',
      fontSize: "0.875rem",
      lineHeight: '1.57',
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "Roboto", 
      fontWeight: '400',
      fontSize: "1rem",
      lineHeight: '1.5',
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Times New Roman",
      fontWeight: '400',
      fontSize: "0.875rem",
      lineHeight: '1.43',
      letterSpacing: "0.01071em"
    },
    button: {
      fontFamily: "Roboto",
      fontWeight: '500',
      fontSize: "0.875rem",
      lineHeight: '1.75',
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Roboto",
      fontWeight: '400',
      fontSize: "0.75rem",
      lineHeight: '1.66',
      letterSpacing: "0.03333em",
    },
  },
  shape: {
    borderRadius: 10
  },
  breakpoints: {
    values: {
      xs: 0,
        sm: 600,
          md: 960,
            lg: 1280,
              xl: 1920,
      },
  },
  direction: "ltr",
  })
