import { useState } from "react";
function Child(props){
    let [counter,setCounter] = useState(props.data) ;
    function Increment(){
        setCounter(counter + 1) ;
        return counter ; 
    }
    function Decrement(){
        setCounter(counter - 1) ;
        return counter ;
    }
    return(
        <div className=" w-50 mx-auto bg-primary">
            <button className="btn btn-success m-5" onClick={()=> props.func(Increment)}>Increment</button>
            <button className="btn btn-success m-5" onClick={()=> props.func(Decrement)}>Decrement</button>
        </div>
    );
}
export default Child ;