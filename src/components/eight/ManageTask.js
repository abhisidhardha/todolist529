import AddTasks from '../eight/AddTask'
import TaskList from '../eight/TaskList'
import TaskCount from './TaskCount'
function ManageTasks(){
    return(
            <div className='d-flex container mt-5 text-white border' >
            <div className='row w-100'>
                <h2 className='text-center text-info'>TO-DO-List<p>By 22071A0529</p></h2>
            <div className='bg-dark col p-3 '>
                <p className='display-3 text-info'>Add Task</p>
                <AddTasks/>
            </div>
            <div className='bg-dark col p-3 border'>
            <p className='display-3 text-info'>Task List</p>
                <TaskList/>
            </div>
            <div className='bg-dark col p-3 border'>
                <p className='display-3 text-info'>Task Count</p>
                <TaskCount/>
            </div>
            </div>
            
        </div>
    );
}
export default ManageTasks ;