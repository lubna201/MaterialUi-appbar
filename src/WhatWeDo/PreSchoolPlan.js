import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../ps.png';
import Button from '@material-ui/core/Button';
import './pre.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const PreSchoolPlan = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
                PRE-SCHOOL PLANS
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        <div id="parent">Kids Galaxy<div id="border"></div></div>
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Your one stop solution
                    </Typography>
                    <Typography variant="p" gutterBottom>
                        Get your students ready for kindergarten with preschool lesson plans that are fun and tackle essential early learning skills.Explore Kid Galaxy's preschool plans.
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
                <div className="floating" style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
                    <div className="card-object rotate">
                        <header></header>
                        <aside></aside>
                        <main><blockquote className="message">Pre-schooling is taken very seriously by all parents. Parents will only select a school which are within the best interests of their children. Kids Galaxy provides appealing and attractive plans for pre schools which are focused on interaction, activities, learning opportunities, health and safety routines and more. Our Pre-school plans include formation ofcourse structure, proper teacher training, beneficial environmental outlook, creative classroom design, focus on academics growth and more. The plans are based on the classes of Literacy, Numeracy, Themes, Physical and Creativity. </blockquote></main>
                        <footer className="author">Kids Galaxy</footer>

                    </div>
                </div>
            </div>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h5" gutterBottom>
                Our Pre School plans for Nursery, JKG and SKG
            </Typography>
            <ol>
                <li class="">Annual plans.</li>
                <li class="">Monthly plans.</li>
                <li class="">Assessment plans.</li>
                <li class="">Pre School Time Table </li>
                <li class="">Daily Plans.</li>
                <li class="">Preschool Teachers’ Trainings at different levels.</li>
                <li>
                    <div class="c">
                        <input type="checkbox" id="faq-1" />
                        <p><label for="faq-1">Pre School Basic Teachers’ Training includes:</label></p>
                        <div class="p">
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Child Psychology " />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Milestone Rhymes " />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Creative Club " />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Reading Readiness " />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Writing Readiness " />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Daily Routine " />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </li>
            </ol>
        </Container>
    );
};

export default PreSchoolPlan;