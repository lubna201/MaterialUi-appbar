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

const AcademicCalendar = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
            ACADEMIC CALENDAR
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        We are here!
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        To give you design you academic calendar.
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    Academic calendars are systems by which we define the landmark dates that drive much of the day-to-day business at the academic institution. Kids Galaxy provides ideas which are a treat for any institution.
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
                        <main><blockquote className="message">An academic calendar is important to keep a track of key dates and system throughout the academic semester and year. The more planned an academic calendar is, the more optimized results we get. Every school requires a different academic calendar based on semester system, timings, number of students and teachers, class capacity, environmental influence, holidays and more. Kids Galaxy helps create a well designed calendar which fulfils all categories and provides the highest potential results.  </blockquote></main>
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
                    Our academic calendar services  
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Annual plan." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Monthly plan." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Assessment plan." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Time Table." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Teacher training." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Parents Meetings." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Parents Workshops." />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Events for the year" />
                </ListItem>
            </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AcademicCalendar;