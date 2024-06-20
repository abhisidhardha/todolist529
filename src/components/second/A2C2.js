import React from "react";
import C2G2 from './C2G2';
import C2G3 from './C2G3';
import './a.css' ;
function A2C2(){
    return(
        <div className="rounded-2 p-2" style={{backgroundColor:'rgb(59, 210, 0)'}}>
            <p>
                Hello this is 2nd child of family<br/>
                My Name is Richard , Age : 37
            </p>
            <div className="container row rounded-2" style={{fontSize:20}}>
                <div className="col rounded-2" style={{backgroundColor:'rgb(0, 255, 179)'}}>
                    <C2G2/>    
                </div>
                <div className="col rounded-2" style={{backgroundColor:'rgb(0, 255, 214)'}}>
                    <C2G3/>    
                </div>
            </div>
        </div>);
}
export default A2C2;