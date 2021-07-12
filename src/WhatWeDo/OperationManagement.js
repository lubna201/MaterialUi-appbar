import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../om.png';
import pic1 from '../om1.jpg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './style.css';

const OperationManagement = () => {
    return (
        <Container>
            <Typography style={{ textAlign: "center", marginTop: "5%" }} variant="h4" gutterBottom>
                OPERATIONS MANAGEMENT
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
                        Operations management is the administration of business practices to create the highest level of efficiency possible within an organization.Kids Galaxy helps ease the tasks by forming efficient methods of management.
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
                        <main><blockquote className="message">Our well researched and experienced team allows us to do so in an easy way. Our managed schools involve calculated management which results in their optimized organizational results. We make management of the daily operations in a school hassle free by reducing the amount of work load and the pressure that comes with it. However, this is a very important aspect when it comes to schools. </blockquote></main>
                        <footer className="author">Kids Galaxy</footer>

                    </div>
                </div>
            </div>
            <Card style={{ marginBottom: "5%" }}>
                <CardActionArea>
                    <CardMedia>
                        <img src={pic1} alt="" srcSet="" style={{ width: "100%" }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                            Services under Operations Management
                        </Typography>
                        <Typography variant="body2">
                            <ul>
                                <li>Planning, organizing and supervising.</li>
                                <li>Forming a finance management system.</li>
                                <li>Creating income and expense reports.</li>
                                <li>Establishing daily, weekly, monthly and annual budgeting.</li>
                                <li>Establishing daily, weekly, monthly and annual expenses report system.</li>
                                <li>Forming collection and deposit system.</li>
                                <li>Shaping school asset management.</li>
                                <li>Making documentation and record maintenance.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px" }}>Get in Touch</Button>
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: "15px", marginLeft: "15px" }}>Book Now</Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default OperationManagement;