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
// import AddCourse from './Addcourse';



function App() {



  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Switch>
          <Route path="/editProfile">
            <Appbar></Appbar>
           {/* <EditProfile></EditProfile> */}
          </Route>
          <Route path="/addCourse">
            <AddCourse></AddCourse>
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