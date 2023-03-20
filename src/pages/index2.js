import React from "react";
import ReCAPTCHA from "react-google-recaptcha";


 class index2 extends React.Component{
    render(){
        return(
            <><div className="heady">
                <h1>KONTAKTA OSS</h1>
            </div><form id="forms">
                    <input type="text" name="Namn" placeholder="Namn..."></input>
                    <input type="email" name="E-post" placeholder="E-post..."></input>
                    <input type="subject" name="Ämne" placeholder="Ämne.."></input>

                    <textarea name="message" placeholder="Meddelande..."></textarea>

                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/>
                    <input type="submit" value="Skicka"></input>



                </form></>
            
        );
        
    }
 }

 export default index2;