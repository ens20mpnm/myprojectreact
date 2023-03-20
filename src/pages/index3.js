import React from "react";
import video from './Frisa.mp4'

 class index3 extends React.Component{
    render(){
        return(
            <><div className="index3">
                <h1>OM OSS</h1>
            </div><div className="videoforyou">

                    <video src={video} type="video/mp4" width="500" height="300" controls>
                            Your browser does not support the video tag.
                        </video>

                </div><div className="bröd">
                    <h2>information</h2>
                    <p> Brödtext Brödtext  Brödtext  Brödtext  Brödtext  Brödtext  Brödtext  Brödtext</p>
                </div></>

           
        );
        
    }
 }

 export default index3;