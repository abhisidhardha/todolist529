import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
function TaskCount(){
    let [tasks,setTasks] = useContext(TaskContext)
    return(
        <div className="p-5 display-3">
            <p>{tasks.length}</p>
        </div>
    )
}
export default TaskCount