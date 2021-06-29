import React from 'react';
// import Appbar from './Appbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pic from './pic.jpg';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
        <Grid container spacing={3} style={{ marginTop: "2%", justifyContent: "center" }}>
          <Grid item xs={12} sm={5}>

            {/* <Carousel  infiniteLoop={true} thumbWidth={60} autoPlay style={{
              height: "100%", padding: "0"
            }}>
              <img src={pic} alt="" srcset="" />
              <img src={pic} alt="" srcset="" />
              <img src={pic} alt="" srcset="" />
            </Carousel> */}
            <Card style={{height:"100%"}}>
              <CardContent>
                <Carousel thumbWidth={60} infiniteLoop={true} autoPlay >
                  <div>
                    <img src={pic} alt="" srcset="" style={{width:"80%"}}/>
                  </div>
                  <div>
                    <img src={pic} alt="" srcset="" style={{width:"80%"}}/>
                  </div>
                  <div>
                    <img src={pic} alt="" srcset="" style={{width:"80%"}}/>
                  </div>
                </Carousel>
              </CardContent>

            </Card>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Card className="rootCard">
              <CardContent>
                <Grid container spacing={2}>

                  <Grid item xs={8} sm={8}>
                    <Typography variant="h5" gutterBottom>
                      English Basic Learning
                    </Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <div className="burst">
                      <span><Typography variant="h6">
                        <Icon icon={currencyInr} />2100
                      </Typography>


                        <Typography gutterBottom><s>
                          <Icon icon={currencyInr} />3000</s>
                        </Typography></span>
                    </div>
                  </Grid>

                </Grid>
                <Grid container spacing={0}>


                </Grid>

                <Button variant="contained" color="primary" style={{ width: "100%", marginTop: "18px" }}>
                  Enroll Now
                </Button>
                <Typography variant="body2" style={{ width: "100%", marginTop: "18px" }} gutterBottom >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut maiores consequatur earum sunt totam et fugiat, cupiditate sed pariatur harum vitae? Alias ad hic officia sint fugit consequuntur repudiandae!
                </Typography>

                <Divider style={{ margin: "5px" }} />




                <List style={{ padding: "0" }}>
                  <ListItem button style={{ padding: "0" }}>
                    <ListItemIcon>
                      <ClassIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText variant="body2" primary="Class 7" />
                  </ListItem>
                  <ListItem button style={{ padding: "0" }}>
                    <ListItemIcon>
                      <AccessibilityIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText variant="body2" primary="For 10-13 Years" />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button style={{ padding: "0" }}>
                    <ListItemIcon>
                      <LibraryBooksIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText variant="body2" primary="Total 15 Chapters" />
                  </ListItem>

                  <ListItem button style={{ padding: "0" }}>
                    <ListItemIcon>
                      <ScheduleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText variant="body2" primary="4 Month Course" />
                  </ListItem>
                </List>

              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>





          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CourseDescriptionPage;