// import {  fade,makeStyles, createMuiTheme } from '@material-ui/core/';
// export const theme = createMuiTheme({
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 960,
//             lg: 1280,
//             xl: 1920,
//         },
//     },
//     palette: {
//       common: {
//         black: '#000',
//         white:'#fff'},
//         type:"light",
//       primary: {
//         main: '#5abb75',
//         light: '#e28f77',
//         dark: "#e28fff",
//         contrastText: "#fff",
//       },
//       secondary: {
//         main: "#d32626",
//         light: '#583d79',
//         dark: "#583d75",
//         contrastText: "#fff",
//       },
//       text: {
//         primary:'#000000',
//         secondary: '#000000',
//         light: '#fff',
//         dark: "#000000",
//         disabled:'rgba(255, 255, 255, 0.5)',
//         hint: 'rgba(255, 255, 255, 0.5)',
//         icon: 'rgba(255, 255, 255, 0.5)',
//         divider: 'rgba(255, 255, 255, 0.12)'},
//     },
    
//   typography: {
//     fontFamily: "Comic Sans MS",
//     fontWeightLight: '300',
//     fontWeightRegular: '400',
//     fontWeightMedium: '500',
//     fontWeightBold: '700',
//     h1: {
//       fontFamily: "Roboto",
//       fontWeight: '300',
//       fontSize: "6rem",
//       lineHeight: '1.167',
//       letterSpacing: "-0.01562em",
//     },
//     h2: {
//       fontFamily: "Helvetica",
//       fontWeight: '300',
//       fontSize: "3.75rem",
//       lineHeight: '1.2',
//       letterSpacing: "-0.00833em",
//     },
//     h3: {
//       fontFamily: "Roboto",
//       fontWeight: '400',
//       fontSize: "3rem",
//       lineHeight: '1.167',
//       letterSpacing: "0em",
//     },
//     h4: {
//       fontFamily: "Roboto",
//       fontWeight: '400',
//       fontSize: "2.125rem",
//       lineHeight: '1.235',
//       letterSpacing: "0.00735em",
//     },
//     h5: {
//       fontFamily: "Roboto",
//       fontWeight: '400',
//       fontSize: "1.5rem",
//       lineHeight: '1.334',
//       letterSpacing: "0em",
//     },
//     h6: {
//       fontFamily: "Roboto",
//       fontWeight: '800',
//       fontSize: "1.25rem",
//       lineHeight: '1.6',
//       letterSpacing: "0.0075em",
//     },
//     subtitle1: {
//       fontFamily: "Roboto", 
//       fontWeight: '400',
//       fontSize: "1rem",
//       lineHeight: '1.75',
//       letterSpacing: "0.00938em",
//     },
//     subtitle2:{
//       fontFamily: "Roboto",
//       fontWeight: '500',
//       fontSize: "0.875rem",
//       lineHeight: '1.57',
//       letterSpacing: "0.00714em",
//     },
//     body1: {
//       fontFamily: "Roboto", 
//       fontWeight: '400',
//       fontSize: "1rem",
//       lineHeight: '1.5',
//       letterSpacing: "0.00938em",
//     },
//     body2: {
//       fontFamily: "Times New Roman",
//       fontWeight: '400',
//       fontSize: "0.875rem",
//       lineHeight: '1.43',
//       letterSpacing: "0.01071em"
//     },
//     button: {
//       fontFamily: "Roboto",
//       fontWeight: '500',
//       fontSize: "0.875rem",
//       lineHeight: '1.75',
//       letterSpacing: "0.02857em",
//       textTransform: "uppercase",
//     },
//     caption: {
//       fontFamily: "Roboto",
//       fontWeight: '400',
//       fontSize: "0.75rem",
//       lineHeight: '1.66',
//       letterSpacing: "0.03333em",
//     },
//   },
//   shape: {
//     borderRadius: 10
//   },
//   direction: "ltr",

// })
// const drawerWidth = 200;

// export const useStyles = makeStyles((theme) => ({
    // form: {
    //     backgroundColor: '#E4EFE7',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     width: '90%',
    //     margin: '0 auto',
    //     marginTop: '4vh',
    //     padding: '40px',
    //     borderRadius: '10px',
    //     '& input': {
    //         color: 'black',
    //         padding: '10px',
    //         borderRadius: '5px',
    //     },
    //     '& label': {
    //         marginTop: '5px',
    //         color: 'green',
    //         // padding:'10px'
    //     },
    // },

    // btn: {
    //     backgroundColor: '#5abb75',
    //     // margin: '0 auto',
    //     color: 'white',
    //     width: '100%',
    //     borderRadius: '7px',
    //     padding:'10px',
    //     marginTop: '30px',
    //     '&:hover': {
    //         backgroundColor: '#a933e8',
    //         color: 'black',
    //     },
    // },

    // active: {
    //     backgroundColor: '#a933e8',
    // },

    // btngroup: {
    //     display: 'flex',
    //     width: '100%',
    //     justifyContent: 'spaceBetween',
    // },

    // //dashboard
    // appbar: {
    //     backgroundColor: 'transparent',
    //     color: 'black',
    //     boxShadow: 'none',
    // },
    // grow: {
    //     flexGrow: 1,
    //     zIndex: 1500,
    // },
    // usermenu: {
    //     marginTop: '1.5rem',
    //     "& .MuiPaper-root": {
    //         backgroundColor: "transparent",
    //         boxShadow: 'none',
    //     }
    // },
    // menuItem: {
    //     fontFamily: theme.typography.fontFamily,
    //     letterSpacing: '1px',
    //     padding: '0.15rem',
    //     paddingRight: '0.7rem',
    //     textAlign: 'right',
    // },
    // title: {
    //     display: 'none',
    //     [theme.breakpoints.up('sm')]: {
    //         display: 'block',
    //     },
    // },
    // search: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: fade(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: fade(theme.palette.common.white, 0.25),
    //     },
    //     marginRight: theme.spacing(2),
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(3),
    //         width: 'auto',
    //     },
    // },
    // searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // inputRoot: {
    //     color: 'inherit',
    // },
    // inputInput: {
    //     padding: theme.spacing(1, 1, 1, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '100%',
    //     [theme.breakpoints.up('md')]: {
    //         width: '20ch',
    //     },
    // },
    // sectionDesktop: {
    //     display: 'none',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'grid',
    //         gridTemplateColumns: 'auto auto auto auto',
    //         columnGap: '10px',
    //         alignItems: 'center',

    //     },
    // },
    // sectionMobile: {
    //     display: 'flex',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //     },
    // },
    // dashboardBg: {
    //     minHeight: '100vh',
    //     width: '100vw',
    //     position: 'absolute',
    //     backgroundColor: '#ebebff',
    // },
    // root: {
    //     display: 'flex',
    // },
    // appBar: {
    //     backgroundColor: 'blue',
    //     color: 'black',
    //     boxShadow: 'none',
    //     // zIndex: theme.zIndex.drawer + 1,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    // menuButton: {
    //     marginRight: 36,
    // },
    // hide: {
    //     display: 'none',
    // },
    // drawer: {
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     whiteSpace: 'nowrap',
    //     backgroundColor: 'transparent',
    //     color: 'black',
    //     boxShadow: 'none',
    //     border: 'none',
    // },
    // drawerOpen: {
    //     backgroundColor: 'transparent',
    //     color: 'black',
    //     boxShadow: 'none',
    //     border: 'none',
    //     width: drawerWidth,
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    // drawerClose: {
    //     backgroundColor: 'transparent',
    //     color: 'black',
    //     boxShadow: 'none',
    //     border: 'none',
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    //     overflowX: 'hidden',
    //     width: theme.spacing(7) + 1,
    //     [theme.breakpoints.up('sm')]: {
    //         width: theme.spacing(9) + 1,
    //     },
    // },
    // toolbar: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    //     padding: theme.spacing(0, 1),
    //     // necessary for content to be below app bar
    //     ...theme.mixins.toolbar,
    // },
    // content: {
    //     // border: '1px solid black',
    //     flexGrow: 1,
    //     padding: theme.spacing(3),
    //     transition: theme.transitions.create('margin', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // divider: {
    //     height: '2px',
    //     backgroundColor: 'black',
    // },
    // dividerClose: {
    //     width: '80%',
    //     margin: '0 auto',
    //     height: '2px',
    //     backgroundColor: 'black',
    // },
    // listitem: {
    //     width: '80%',
    //     margin: '0 auto',
    // },
    // profileButton: {
    //     display: 'grid',
    //     gridTemplateColumns: 'auto auto',
    //     columnGap: '10px',
    // },
    // username: {
    //     fontFamily : theme.typography.fontFamily,
    //     letterSpacing : '1px',
    // },
    // link: {
    //     textDecoration: 'none',
    //     color: 'black',
    // },
    // icon : {
    //     display: 'grid',
    //     gridTemplateColumns: 'auto 10%',
    //     columnGap: '0.25rem',
    //     padding: '0.7rem 0',
    // },
    // //editprofile
    // editprofile: {
    //     // border: '1px solid blue',
    //     margin: '0 auto',
    //     display: 'grid',
    //     gridTemplateColumns: '30% auto',
    //     columnGap : '0.5rem',
    // },
    // editProfileMenu:{
    //     // border: '1px solid red',
    //     padding: '1rem 0.5rem',
    //     display: 'flex',
    //     flexDirection: 'column',
    // },
    // editProfileContent: {
    //     // border: '2px solid red',
    // },
    // editProfileButton:{
    //     alignContent: 'left',
    //     backgroundColor: '#5abb75',
    //     padding:'20px',
    //     margin:'10px',
    //     textAlign:'left',
    //     color: 'white',
    //     '&:hover': {
    //       backgroundColor: '#a933e8',
          
    //   },
    //   ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
    //     alignContent: 'left',
    //     backgroundColor: '#5abb75',
    //     padding:'20px',
    //     paddingLeft: '60px',
    //     paddingRight: '60px',
    //     marginTop:'5px',
    //     textAlign:'left',
    //     '&:hover': {
    //       backgroundColor: '#a933e8',
    //   },
    //   }










import { createMuiTheme } from "@material-ui/core/styles";


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
      fontWeight: '400',
      fontSize: "2.125rem",
      lineHeight: '1.235',
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "Roboto",
      fontWeight: '400',
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
