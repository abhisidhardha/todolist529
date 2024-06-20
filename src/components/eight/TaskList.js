import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
function TaskList(){
    let [tasks,setTasks] = useContext(TaskContext)
    return(
        <div className="p-5 display-5">
            {
                tasks.map((taskObj,index)=><p className="lead" key={index}>{taskObj.newTask}</p>)
            }
        </div>
    );
}
export default TaskList