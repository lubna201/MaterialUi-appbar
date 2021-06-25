import React from 'react';
import Appbar from './Appbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import pic from './pic.jpg';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClassIcon from '@material-ui/icons/Class';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

const CourseDescriptionPage = () => {
    const [value, setValue] = React.useState(2);
    return (
        <div>
            {/* <Appbar></Appbar> */}
            <Container fixed>
                <Grid container spacing={3} style={{ marginTop: "80px", justifyContent: "center" }}>
                    <Grid item xs={12} sm={5}>
                        <Typography variant="h3" gutterBottom>
                            <Card className="">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="100%"
                                        image={pic}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                                <CardActions>
                                    
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            size="large"
                                            style={{ marginLeft:"20px"}}
                                        />
                                   
                                </CardActions>
                            </Card>
                            <Button variant="contained" color="primary" style={{ width: "100%" }}>
                                Enroll Now
                            </Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography variant="h5" gutterBottom>
                            English Basic Learning
                        </Typography>
                        <Typography variant="p" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut maiores consequatur earum sunt totam et fugiat, cupiditate sed pariatur harum vitae? Alias ad hic officia sint fugit consequuntur repudiandae!
                        </Typography>
                        <Divider style={{marginTop:"7px"}} />
                        <Typography variant="h6" gutterBottom>
                            Course Details
                        </Typography>
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
            <AttachMoneyIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Actual Price : $3000" />
        </ListItem>
      </List>
  <Divider orientation="vertical" flexItem />
  <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
        <ListItemIcon>
            <MoneyOffIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Discount : 30%" />
        </ListItem>
      </List>
</Grid>
<Typography variant="h6" gutterBottom>
                            Course Price After Discount: $ 2100
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default CourseDescriptionPage;