import React from "react";
import foto from './hairdresser.jpg'
class Home extends React.Component{
    render(){
        return(
            <div className="wrapper">
                 
                <div className="textbox">
                     <button B="BytF()">BOKA</button>
                </div>
                    <div className="boarder">
                        <h1>VÄLKOMMEN</h1>
                    </div>
                    <div className="division">
                            <div className="left-img">
                                <img src={foto}  alt="" />
                            </div>
                            <div className="div-left">
                                <h1 className="nyheter">NYHETER</h1>
                                <p> hopp  hopp  hopp  hopp  hopp  hopp  hopp  hopp  hopp </p>
                            </div>
                            <div className="right-img">
                                <img src={foto} alt="" />
                            </div>
                            <div className="div-right">
                                <h1 className="erbjudande">ERBJUDANDEN</h1>
                                <p> roligt  roligt  roligt  roligt  roligt  roligt  roligt </p>
        
                            </div>
                    </div>
                    <div className="instagram">
                        <h1>INSTAGRAM</h1>
                        <p>här under tänkte jag länka till deras taggad bilder på instagram</p>
                    </div>
        </div>
        );
      
        
    }
}

export default Home;