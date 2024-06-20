import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { useForm } from "react-hook-form";
function AddTask(){
    let {register,handleSubmit,formState:{errors}} = useForm();
    let [tasks,setTasks] = useContext(TaskContext)
    function handleFormSubmit(taskObj){
        setTasks([...tasks,taskObj])
    }
    return(
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <input type="text" {...register("newTask",{required:true})} className="form-control " placeholder="Enter a task"/>
                {errors.newTask?.type === "required" && <p className="text-danger">*Add Task First</p> }
                <button type="submit" className="btn m-3 btn-success">Add</button>
            </form>
        </div>
    );
}
export default AddTask ;