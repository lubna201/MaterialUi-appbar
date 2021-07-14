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
import ContactUs from './ContactUs';
import SchoolStructure from './WhatWeDo/SchoolStructure';
import OperationManagement from './WhatWeDo/OperationManagement';
import SchoolMarketing from './WhatWeDo/SchoolMarketing';
import HRManagement from './WhatWeDo/HRManagement';
import EventIdeation from './WhatWeDo/EventIdeation';
import AcademicCalendar from './WhatWeDo/AcademicCalendar';
import EducationalPlan from './WhatWeDo/EducationalPlan';


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
           <ContactUs></ContactUs>
          </Route>
          <Route path="/footer">
           <Footer></Footer>
          </Route>
          <Route path="/schoolStructure">
           <SchoolStructure/>
          </Route>
          <Route path="/operationManagement">
           <OperationManagement/>
          </Route>
          <Route path="/schoolMarketing">
           <SchoolMarketing/>
          </Route>
          <Route path="/hrManagement">
           <HRManagement/>
          </Route>
          <Route path="/eventIdeation">
           <EventIdeation/>
          </Route>
          <Route path="/academicCalendar">
           <AcademicCalendar/>
          </Route>
          <Route path="/educationalPlan">
           <EducationalPlan/>
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
