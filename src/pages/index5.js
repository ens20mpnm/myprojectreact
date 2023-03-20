import React from "react";

 class index5 extends React.Component{
    render(){
        return(
           
            <><div className="Öppet">
                <h2>ÖPPETTIDER</h2>
            </div><div className="tabell">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Klippning</th>
                                <th>Pris</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Måndag – torsdag</td>
                                <td>08.00 – 17.00</td>
                            </tr>
                            <tr>
                                <td>Fredag</td>
                                <td>08.00 – 15.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div></>
        );
        
    }
 }

 export default index5;