import React from 'react';
// import Appbar from './Appbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pic from './pic.jpg';
import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClassIcon from '@material-ui/icons/Class';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Icon } from '@iconify/react';
import currencyInr from '@iconify-icons/mdi/currency-inr';
import './EditProfile.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CourseDescriptionPage = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      {/* <Appbar></Appbar> */}
      <Container>
        <Grid container spacing={3} style={{ marginTop: "2%" }}>
          <Grid item xs={12} sm={5}>
            {/* <Carousel style={{ height: "80%" }}>
              <div>
                <img src={pic} alt="" srcset="" />
              </div>
              <div>
                <img src={pic} alt="" srcset="" />
              </div>
              <div>
                <img src={pic} alt="" srcset="" />
              </div>
            </Carousel> */}
            <Carousel infiniteLoop={true}  thumbWidth={60} autoPlay style={{ height: "100%",padding:"0" }}>
            <img src={pic} alt="" srcset="" />
            <img src={pic} alt="" srcset="" />
            <img src={pic} alt="" srcset="" />
      </Carousel>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container spacing={2}>

              <Grid item xs={8} sm={8}>
                <Typography variant="h4" gutterBottom>
                  English Basic Learning
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  size="medium"
                />
              </Grid>

            </Grid>

            <Button variant="contained" color="primary" style={{ width: "100%"}}>
              Enroll Now
            </Button>
            <Typography variant="p" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut maiores consequatur earum sunt totam et fugiat, cupiditate sed pariatur harum vitae? Alias ad hic officia sint fugit consequuntur repudiandae!
            </Typography>

            <Divider style={{ margin: "5px" }} />
            {/* <Grid container alignItems="center" className="">
              <List style={{padding:"0"}}>
                <ListItem >
                  <ListItemIcon>
                    <s><Icon icon={currencyInr} /></s>
                  </ListItemIcon>
                  <s><ListItemText primary="Actual Price :3000" /></s>
                </ListItem>
              </List>
              <Divider orientation="vertical" flexItem />
              <List>
                <ListItem >
                  <ListItemText primary="Discount : 30%" />
                </ListItem>
              </List>
            </Grid> */}
            <Grid container spacing={3}>

              <Grid item xs={6} sm={6}>
              <s><Icon icon={currencyInr} /><Typography variant="p" gutterBottom>
              Actual Price :3000
                </Typography></s>
              </Grid>
              <Grid item xs={6} sm={6}>
              
              <Typography variant="p" gutterBottom>
              Discount : 30%
                </Typography>
              </Grid>
              </Grid>

            <Typography variant="h6" style={{paddingTop:"7px"}}>
              Course Price: <Icon icon={currencyInr} /> 2100
            </Typography>

            <List style={{padding:"0"}}>
              <ListItem button style={{padding:"0"}}>
                <ListItemIcon>
                  <ClassIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Class 7" />
              </ListItem>
              <ListItem button style={{padding:"0"}}>
                <ListItemIcon>
                  <AccessibilityIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="For 10-13 Years" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button style={{padding:"0"}}>
                <ListItemIcon>
                  <LibraryBooksIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Total 15 Chapters" />
              </ListItem>

              <ListItem button style={{padding:"0"}}>
                <ListItemIcon>
                  <ScheduleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="4 Month Course" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CourseDescriptionPage;