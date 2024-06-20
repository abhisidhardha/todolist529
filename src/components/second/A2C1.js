import React from "react";
import C1G1 from './C1G1';
import './a.css' ;
function A2C1(){
    return(
        <div className="rounded-2 bg-primary p-2">
            <p>
                Hello this is 1st Child of family<br/>
                My Name is Jack , Age : 41
            </p>
        <div className="container rounded-2" style={{fontSize:20,backgroundColor:'rgb(83, 30, 255)'}}>
            <C1G1/>
        </div>
        </div>);
}
export default A2C1 ;