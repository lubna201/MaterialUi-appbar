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
                School Structure
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
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>Organization of Schooling</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Developmental, ungraded wings</li>
                                <li>Continuum classes</li>
                                <li>Team teaching</li>
                                <li>Collaboration within same grade level</li>
                                <li>Integrated core courses</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>Productive Uses of Time</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Block scheduling</li>
                                <li>After-school tutoring</li>
                                <li>Year-round schedule</li>
                                <li>Summer school</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}> Blended learning approach</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Blended learning is an approach to education that combines online educational materials and opportunities for interaction online with traditional place-based classroom methods. It requires the physical presence of both teacher and student, with some elements of student control over time, place, path, or pace.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>Teacher Collaboration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Cross-grade and within grade level planning</li>
                                <li>Teacher collaboration within wings</li>
                                <li>Weekly minimum days for joint planning</li>
                                <li>Common planning time for teachers</li>
                                <li>Team teaching</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>Professional Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Extensive professional development based on assessment of needs</li>
                                <li>Professional development focusing on language development</li>
                                <li>Intensive, long-term professional development through relationship with external partner</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>School Decision- Making</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Committee- based decision- making</li>
                                <li>Inquiry method implemented by cadres</li>
                                <li>IHouse-level administration and decision-making</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>Parent, Community Engagement</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Extensive parent education, outreach, and involvement</li>
                                <li>Parent and community outreach</li>
                                <li>Parents involved in governance</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ marginTop: "4%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="p" color="primary" style={{ fontWeight: "700" }}>Integrated Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Proactive student counseling</li>
                                <li>Referrals made by community liaisons</li>
                                <li>On-site social services and referrals via social workers</li>
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
                        Online Learning!
                    </Typography>
                    <Typography variant="p" gutterBottom>
                        Online learning is education that takes place over the Internet. It is often referred to as “elearning” among other terms. However, online learning is just one type of “distance learning” -
                        the umbrella term for any learning that takes place across distance and not in a traditional
                        classroom.
                    </Typography>
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px" }}>Get in Touch</Button>
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px", marginLeft: "15px" }}>Book Now</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SchoolStructure;