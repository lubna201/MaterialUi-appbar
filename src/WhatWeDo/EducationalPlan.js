import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../ep2.png';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './style.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import pic1 from '../ep1.png';

const EducationalPlan = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
                EDUCATION PLANS
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        Primary, Middle and
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        High School Education Plan
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    Kids Galaxy, Your one stop solution. <br/>
                        Kids Galaxy helps in proper planning and establishing of plans for highest potential output.
                    </Typography>
                    <br />
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px" }}>Book Now</Button>
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px", marginLeft: "15px" }}>Get in Touch</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={pic1} alt="" srcSet="" style={{ width: "100%", height: "100%" }} />
                </Grid>
            </Grid>
            <div style={{ marginTop: "10%" }}>
                <Typography style={{ textAlign: "center", marginTop: "2%" }} variant="h4" gutterBottom>
                    Know More About It
                </Typography>
                <div className="stylePart">
                    <Typography variant="p" gutterBottom>
                        <ul>
                            <li>Primary school education  from Class 1 to Class 5.</li>
                            <li>Middle school education from Class 6 toClass 8.</li>
                            <li>High school education for Class 9 and Class 10.</li>
                        </ul>
                    </Typography>
                </div>
                <div className="floating" style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
                    <div className="card-object rotate">
                        <header></header>
                        <aside></aside>
                        <main><blockquote className="message">
                            Primary, middle and high school education are a series of budding stages for students and shapes them for their future.We assure maintenance of adequate inputs, high quality of education and educational costs, thoroughly researched courses, detailed yet quick assessment preparations, distributing appropriate time, admirable teacher training sessions, ongoing evaluation, secure and organized system and more. Our education plans include the plans of English, Math, Environmental studies/ Science and Social Studies.</blockquote></main>
                        <footer className="author">Kids Galaxy</footer>
                    </div>
                </div>
            </div>

            <Grid container spacing={3} style={{ marginTop: "5%", marginBottom: "5%" }}>
                <Grid item xs={12} sm={6} >
                    <img src={pic} alt="" srcSet="" style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        Services
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Primary, Middle and High school Time Table." />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Annual plans." />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Monthly plans." />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Assessment plans." />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Daily plans." />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Subject wise teacher trainings are provided for English, math, Environmental studies/Science and social studies." />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Middle and High School teachers’ trainings are provided for core subjects." />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EducationalPlan;