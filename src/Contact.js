import React from 'react';
import contact from './contact.jpg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import WebIcon from '@material-ui/icons/Web';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
// import Icon from 'material-ui/Icon';
import Link from '@material-ui/core/Link';

const Contact = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginTop: "5%" }}>Contact Us</Typography>
            <Grid container spacing={3} style={{ marginTop: "5%", justifyContent: "center" }}>
                <Grid item xs={12} sm={6}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <BusinessIcon />
                            </ListItemIcon>
                            <ListItemText primary="Address: Mumbai, India" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CallIcon />
                            </ListItemIcon>
                            <ListItemText primary="Call now: +1234567789" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                        <Link href="#" variant="body2">
                                <ListItemIcon>
                                    <FacebookIcon />
                                </ListItemIcon>
                                <ListItemText primary="Facebook" />
                                </Link>
                        </ListItem>
                        <ListItem button>
                        <Link href="#" variant="body2">
                                <ListItemIcon>
                                    <WebIcon />
                                </ListItemIcon>
                                <ListItemText primary="Website" />
                            </Link>
                        </ListItem>
                        <ListItem button>
                        <Link href="#" variant="body2">
                                <ListItemIcon>
                                    <InstagramIcon />
                                </ListItemIcon>
                                <ListItemText primary="Instagram" />
                            </Link>
                        </ListItem>
                        <ListItem button>
                        <Link href="#" variant="body2">
                                <ListItemIcon>
                                    <LinkedInIcon />
                                </ListItemIcon>
                                <ListItemText primary="LinkedIn" />
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={contact} alt="" srcSet="" style={{ width: "100%" }} />
                </Grid>
            </Grid>
            <div style={{ justifyContent: "center" }}>
                <Typography variant="h5" gutterBottom style={{ textAlign: "center", marginTop: "5%" }}>Get In Touch</Typography>
                <form >
                    <div >
                        <TextField variant="h4" gutterBottom placeholder="Your Name" id="exampleInputname" aria-describedby="nameHelp" />
                    </div>
                    <div >
                        <TextField variant="h6" gutterBottom placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div >
                        <TextField variant="h6" gutterBottom placeholder="Subject" id="exampleInputsubject" />
                    </div>
                    <div >
                        <TextField variant="h6" multiline maxRows={4} gutterBottom placeholder="Your Message" style={{ height: "100px" }} id="exampleInputmessage" />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" type="submit">Send</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default Contact;