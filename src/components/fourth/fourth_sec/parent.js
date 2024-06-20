import { useState } from 'react';
import Child from './child'
function Parent(){
    let [counter,setCounter] = useState(10);
    function getData(a){
        setCounter(a) ;
    }
    return(
        <div className="bg-warning w-50 mx-auto ">
            <h1 className="text-center text-align-center" >Counter : {counter}</h1>
            <h1 className="text-center"><Child data = {counter} func = {getData} /></h1>
        </div>
    );
}
export default Parent ;