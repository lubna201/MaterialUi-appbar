import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../sm.png';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './style.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import pic1 from '../sm1.png';

const SchoolMarketing = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
                SCHOOL MARKETING
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        We are here!
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Your school marketing solution
                    </Typography>
                    <Typography variant="p" gutterBottom>
                        Marketing is the process of getting potential clients or customers interested in your products and services. Let Kids Galaxy take care of all your marketing needs.
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
                        <main><blockquote className="message">Marketing is a very diverse field. Kids Galaxy takes care of all your marketing needs. Our brilliant and experienced team makes your work easy and assured best results. We handle everything from putting forward a clear message, conducting thorough research, scaling the campaign by boosting, measuring campaign success, increasing the school’s visibility, developing long lasting relationships with the audience and so on.  </blockquote></main>
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
                    Our school marketing services 
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Effective marketing strategies." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Creating enquiries." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Converting enquiries into admissions." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Goal setting." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Data collection." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Teacher counselling." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Parent counselling." />
                </ListItem>
            </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SchoolMarketing;