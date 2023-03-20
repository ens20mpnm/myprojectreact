import React from "react";
import logo from './My-project-1-2.png';
class Header extends React.Component{
    render(){
        return(
            <div className="wrapper">
            <header>
            
                <div className="topnav">
                     <ul>
                        <li><a href="index2">KONTAKTA OSS</a></li>
                        <li><a href="index6">NYHETER</a></li>
                        <li><a href="index3">OM OSS</a></li>
                        <li><a href="index4">PRISLISTA</a></li>
                        <li><a href="index5">ÖPPETTIDER</a></li>
                        <li><a href="index7">BOKA</a></li>
                    </ul>
                
            <div className="box">
                <li><a href="index2">KONTAKTA OSS</a></li>
                <li><a href="index6">NYHETER</a></li>
                <li><a href="index3">OM OSS</a></li>
                <li><a href="index4">PRISLISTA</a></li>
                <li><a href="index5">ÖPPETTIDER</a></li>
                <li><a href="index7">BOKA</a></li>
            </div>
              
            </div>
            <div class="topnav-left">
              <a href="/"> <img src={logo} alt=""/></a>
            
            </div>
        
          </header>
          </div>
        );
    }

}

export default Header;