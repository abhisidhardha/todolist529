import { useState } from "react";
import { TaskContext } from "./TaskContext";
function Store({children}){
    let [tasks,setTasks] = useState([])
    return(
        <TaskContext.Provider value={[tasks,setTasks]}>
            {children}
        </TaskContext.Provider>
    );
}
export default Store 