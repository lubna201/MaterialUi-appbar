import React from 'react';
// import EditProfile from './EditProfile';
import { ThemeProvider } from '@material-ui/core/styles';
import {} from '@material-ui/core';
import {} from '@material-ui/icons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Body from './Body';
import { theme } from './theme'
import Appbar from './Appbar';
import AddCourse from './AddCourse';
import CourseDescriptionPage from './CourseDescriptionPage';
// import AddCourse from './Addcourse';
import EditProfile from './EditProfile';
import Footer from './Footer';
import IntroAnimation from './IntroAnimation';
import Contact from './Contact';



function App() {



  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Switch>
          <Route path="/editProfile">
            {/* <Appbar></Appbar> */}
           <EditProfile></EditProfile>
          </Route>
          <Route path="/addCourse">
            <AddCourse></AddCourse>
          </Route>
          <Route path="/courseDescription">
            <CourseDescriptionPage></CourseDescriptionPage>
          </Route>
          <Route path="/introAnimation">
            <IntroAnimation></IntroAnimation>
          </Route>
          <Route path="/contact">
           <Contact></Contact>
          </Route>
          <Route path="/footer">
           <Footer></Footer>
          </Route>
          {/* <Route path="/AddCourse">
           <AddCourse></AddCourse>
          </Route> */}
          <Route exact path="/">
          {/* <Body></Body> */}
          <Appbar></Appbar>
          </Route>
        </Switch>
      </Router>
     </ThemeProvider>
  );
}
export default App;
