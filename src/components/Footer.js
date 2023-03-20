 import React from "react";
 import insta from './instagram-logo.svg';
 import fb from './facebook-logo.svg';

 class Footer extends React.Component{
    render(){
        return (
            <div className="wrapper">
            <footer>
            <img src={insta} alt="instagram logo" width="50px" />
            <a href="https://sv-se.facebook.com/centralklippet/">
            <img src={fb} alt="facebook logo" width="50px" />
            </a>
            <p>Återkommer med information</p>
          </footer>
          </div>
        );

    }
 }
 export default Footer;