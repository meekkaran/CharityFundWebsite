import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {BrowserRouter as Router ,Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer= () => {
  return (
    <Router>
    <MDBFooter color="pink" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase font-weight-bold" style={{overflowY:'hidden'}}>
              Our Purpose
            </h6>
            <p>
            Amie Foundation exists to inspire happy homes-homes where families have enough to eat. 
             We believe that by pursuing SDG 2 (Zero Hunger),  
            we can over time find other solutions that improve the quality of low income earners' lives
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
         
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase font-weight-bold"  style={{overflowY:'hidden'}}>
              Quick links
            </h6>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <Link to="/EventPage">Events</Link>
            </p>
            <p>
              <a href="/AboutPage">About Us</a>
            </p>
            <p>
              <a href="/ContactPage">Contact Us</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />

          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase font-weight-bold"  style={{overflowY:'hidden'}}>Contact</h6>
            <p>
              <HomeIcon/> Amie Foundation, on Kamiti Road, Opposite Jacaranda Gardens
            </p>
            <p>
              <EmailIcon /> info@amiefoundation.co.ke
            </p>
            <p>
              <PhoneIcon/> +254 706 151 716
            </p>
           
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
               All rights reserved|
               website designed by <a href="https://twitter.com/nyamai_diana">Diana nyamai</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
               
                <li className="list-inline-item">
                <a  href="!#" >
                  <YouTubeIcon/>
                </a>
              </li>
                <li className="list-inline-item">
                  <a href="!#" >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter></Router>
  );
}

export default Footer;