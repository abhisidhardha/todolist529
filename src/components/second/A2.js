import A2C1 from './A2C1';
import A2C2 from './A2C2';
import A2C3 from './A2C3';
import React from "react";
import './a.css' ;
function A2(){
    return(
        <div>
            <h1 className='text-center'>
                Hello this is root of family<br/>
                My Name is Joe , Age : 78
            </h1>
            <div className='container' style={{fontSize:30}}>
                <div className='row rounded-2'>
                    <div className='col' >
                        <A2C1/>
                    </div>
                    <div className='col'>
                        <A2C2/>  
                    </div>
                    <div className='col'>
                        <A2C3/> 
                    </div>
                </div>
            </div>
        </div>);
}
export default A2 ;