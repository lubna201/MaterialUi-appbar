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
        <Grid container spacing={3} style={{ marginTop: "3%", justifyContent: "center" }}>
          <Grid item xs={12} sm={5}>
            <Carousel style={{ height: "80%" }}>
              <div>
                <img src={pic} alt="" srcset="" />
              </div>
              <div>
                <img src={pic} alt="" srcset="" />
              </div>
              <div>
                <img src={pic} alt="" srcset="" />
              </div>
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={7} style={{alignItems:"center"}}>
            <Typography variant="h4" gutterBottom>
              English Basic Learning <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                size="medium"
                style={{ marginLeft: "20px"}}
              />
            </Typography>
            <Button variant="contained" color="primary" style={{ width: "100%", marginBottom: "8px" }}>
              Enroll Now
            </Button>
            <Typography variant="p" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut maiores consequatur earum sunt totam et fugiat, cupiditate sed pariatur harum vitae? Alias ad hic officia sint fugit consequuntur repudiandae!
            </Typography>

            <Divider style={{ marginTop: "5px" }} />

            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <ClassIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Class 7" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessibilityIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="For 10-13 Years" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <LibraryBooksIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Total 15 Chapters" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <ScheduleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="4 Month Course" />
              </ListItem>
            </List>
            <Divider />
            <Grid container alignItems="center" className="">
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <s><Icon icon={currencyInr} /></s>
                  </ListItemIcon>
                  <s><ListItemText primary="Actual Price :3000" /></s>
                </ListItem>
              </List>
              <Divider orientation="vertical" flexItem />
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="Discount : 30%" />
                </ListItem>
              </List>
            </Grid>
            <Typography variant="h6" gutterBottom>
              Course Price: <Icon icon={currencyInr} /> 2100
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CourseDescriptionPage;