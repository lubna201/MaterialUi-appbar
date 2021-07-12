import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../hr1.png';
import pic1 from '../hr2.png';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './style.css';


const HRManagement = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
                HR MANAGEMENT
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        Kids Galaxy
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Your one stop solution
                    </Typography>
                    <Typography variant="p" gutterBottom>
                        Human resource management is the strategic approach to the efficient management of people in an organization. Kids Galaxy is here with the solutions.
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
                <div className="stylePart">
                    <Typography variant="p" gutterBottom>
                        Kids Galaxy helps the system by bringing in passionate and committed employees while collaborating with all departments, developing new programs and staying flexible.
                        We make sure that the HR Manager proves to become of a great value for the school. We recruits HR Manager who is knowledgeable, aware of the current scenario, informative, conducts training sessions, and accepts responsibilities, organized feedback formation and more which can evolve the school’s system.
                    </Typography>
                </div>
            </div>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <img src={pic1} alt="" srcSet="" style={{ width: "100%"}} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card style={{ marginBottom: "5%" }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h6" color="primary">
                                    Services under HR Management
                                </Typography>
                                <Typography variant="body2">
                                    <ul>
                                        <li>Recruitment of Teachers, Clerks, Accountants.</li>
                                        <li>Recruitment of Coordinators, Administrators, Vice Principal, Principal.</li>
                                        <li>If any employee recruited by us leaves within a year, we provide replacement for the same.</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px" }}>Get in Touch</Button>
                            <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px", marginLeft: "15px" }}>Book Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HRManagement;