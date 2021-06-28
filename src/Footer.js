import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SmsIcon from '@material-ui/icons/Sms';

const Footer = () => {
    return (
        <div >
          <Accordion style={{transform: "rotate(360deg)", backgroundColor:"#262e42"}}>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              // aria-controls="panel1a-content"
              // id="panel1a-header"
              // style={{flexDirection: "column"}} 
            >
             
              <Typography className="" style={{color:"white"}}><LinkedInIcon/><InstagramIcon/><FacebookIcon/></Typography>
              <ExpandMoreIcon style={{ marginLeft:"35%", color:"white"}}/>
              <Typography className="" style={{marginLeft:"40%",color:"white"}}><SmsIcon/></Typography>
              <Typography className="" style={{paddingLeft:"1%",color:"white"}}>Contact</Typography>
              
                          </AccordionSummary>
            
            
                        <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
};

export default Footer;