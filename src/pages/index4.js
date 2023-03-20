import React from "react";

 class index4 extends React.Component{
    render(){
        return(
           
          <><div className="PRISLISTA">
                <h1>PRISLISTA</h1>
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
                                <td>Frisyrklippning</td>
                                <td>490 kr</td>
                            </tr>
                            <tr>
                                <td>Student-/pensionärklippning</td>
                                <td>460 kr</td>
                            </tr>
                            <tr>
                                <td>Maskinklippning</td>
                                <td>450 kr</td>
                            </tr>
                            <tr>
                                <td>Barnklippning upp till 8 år</td>
                                <td>380-400 kr</td>
                            </tr>
                            <tr>
                                <td>Snaggning</td>
                                <td>200 kr</td>
                            </tr>

                        </tbody>
                    </table>
                </div></>
            );
}
}

        

export default index4;