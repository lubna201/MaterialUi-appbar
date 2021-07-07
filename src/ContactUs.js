import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from './contact.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './ContactUs.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const ContactUs = () => {
    return (
        <div>
            <div className="icon-bar">
                <a href="//facbook" className="facebook"><FacebookIcon style={{ fontSize: 30 }} /></a>
                <a href="//twitter" className="twitter"><TwitterIcon style={{ fontSize: 30 }} /></a>
                <a href="https://www.linkedin.com/company/kidsgalaxy/" className="linkedin"><LinkedInIcon style={{ fontSize: 30 }} /></a>
                <a href="//youtube" className="youtube"><YouTubeIcon style={{ fontSize: 30 }} /></a>
            </div>
            <Container>
                <Grid container spacing={3} style={{ textAlign: "center", marginTop: "4%" }}>
                    <Grid item xs={12} sm={6} >
                        <Card className="cardstyle">
                            <CardContent>
                                <form noValidate autoComplete="off">
                                    <Typography style={{ textAlign: "center", marginTop: "2%" }} variant="h5" gutterBottom>
                                        Get in Touch
                                    </Typography>
                                    <TextField id="standard-basic" label="Your Name" style={{ width: "100%", marginTop: "9px" }} />
                                    <br />
                                    <TextField id="standard-basic" label="Your Email" style={{ width: "100%", marginTop: "9px" }} />
                                    <br />
                                    <TextField id="standard-basic" label="Subject" style={{ width: "100%", marginTop: "9px" }} />
                                    <br />
                                    <TextField
                                        id="standard-textarea"
                                        label="Your Message"
                                        placeholder="Message"
                                        multiline
                                        rows={4}
                                        style={{ width: "100%", marginTop: "9px" }}
                                    />
                                    <br />
                                    <Button variant="contained" color="primary" type="submit" style={{ width: "100%", marginTop: "20px" }}>Send</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={pic} alt="" srcSet="" style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ContactUs;