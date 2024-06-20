import React from "react";
import C3G4 from './C3G4';
import './a.css' ;
function A2C3(){
    return(
        <div className="rounded-2 p-2" style={{backgroundColor:'#c04900'}}>
            <p>
                Hello this is 3rd child of family<br/>
                My Name is Adam , Age : 33 
            </p>
            <div className="p-2 rounded-2" style={{fontSize:20,backgroundColor:'#c69b00'}}>
                <C3G4/>
            </div>
        </div>);
}
export default A2C3 ;