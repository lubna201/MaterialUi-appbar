import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../ei1.png';
import pic1 from '../ei2.png';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './style.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const EventIdeation = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
            EVENT IDEATION
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        We are here!
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        To give you creative ideas.
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    Kids Galaxy provides unique, creative and fun ideas which are a treat for students.Conducting ideation sessions can help your team strategics and plan what your next event experience might look like.
                    </Typography>
                    <br />
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px" }}>Book Now</Button>
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px", marginLeft: "15px" }}>Get in Touch</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={pic} alt="" srcSet="" style={{ width: "100%", height: "100%" }} />
                </Grid>
            </Grid>
            <div style={{ marginTop: "10%" }}>
                <Typography style={{ textAlign: "center", marginTop: "2%" }} variant="h4" gutterBottom>
                    Know More About It
                </Typography>
                <div className="floating" style={{ textAlign: "center", marginTop: "5%",marginBottom:"5%" }}>
                    <div className="card-object rotate">
                        <header></header>
                        <aside></aside>
                        <main><blockquote className="message">Events are a very crucial part of a school because it helps in the development of the students. The students gain emotional intelligence, build new relations and get a fun break as well. We help in creating events which stay within the budget but still feel so refreshing. A school feels complete when the students are happy and satisfied. We help organize events for students’ pleasure and to make the school feel more lively. Our vigorous execution and vibrant themes make the events entertaining.  </blockquote></main>
                        <footer className="author">Kids Galaxy</footer>

                    </div>
                </div> 
            </div>
            <Grid container spacing={3} style={{ marginTop: "5%", marginBottom: "5%" }}>
                <Grid item xs={12} sm={6} >
                    <img src={pic1} alt="" srcSet="" style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                    Event ideas for the schools  
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Science Exhibition." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Math Exhibition." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Social Studies Exhibition." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Fun Fair Fest." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sports Day Celebration." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Annual Day Celebration." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="English, Math, General Knowledge Quiz Competitions on intra school and inter school levels." />
                </ListItem>
            </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EventIdeation;