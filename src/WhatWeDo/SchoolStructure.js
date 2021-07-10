import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../cover.png';
import pic1 from '../online.png';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css';

const SchoolStructure = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
                SCHOOL STRUCTURE
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "4%" }}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                        We are here!
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        To give your School a new look
                    </Typography>
                    <Typography variant="p" gutterBottom>
                        The digital revolution has touched every sphere and facets of life including the education sector.
                        Revamp your school in a new up-to-date style
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
                        <main><blockquote className="message">Kids Galaxy ensures that the school’s administration is goal oriented, constructive and practical. We manage aspects strategically and efficiently to ensure the best interests of the school.We ensure that schools remain full of motivation in teaching and are not constrained to an ineffective time limit. This results in arising growth of creative minds.A successful school is more than just education. The administration is what provides the school with effective day to day functioning. </blockquote></main>
                        <footer class="author">Kids Galaxy</footer>

                    </div>
                </div>
                <Accordion className="design">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>List of services under School Structure</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Renovation of old school into new pattern.</li>
                                <li>New School Set – Up.</li>
                                <li>Teaching staff requirements.</li>
                                <li>Website designing.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="design">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>All types of educational training</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography>
                            <ul>
                                <li>School management </li>
                                <li>School directors</li>
                                <li>Principals</li>
                                <li>Counsellors</li>
                                <li>Teachers </li>
                                <li>Parents</li>
                                <li>Student workshops for all subjects</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>   
            </div>
            <Grid container spacing={3} style={{ marginTop: "5%", marginBottom: "5%" }}>
                <Grid item xs={12} sm={6} >
                    <img src={pic1} alt="" srcSet="" style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" gutterBottom style={{ marginTop: "4%", color: "#5abb75" }}>
                    Your one stop solution!
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    An effective school organizational structure involves better work distribution, efficient management control, and good information processing. We are here with all the solution for your school.
                    </Typography>
                    <br />
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px" }}>Get in Touch</Button>
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px", marginLeft: "15px" }}>Book Now</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SchoolStructure;