import { useState } from "react";
import Form7 from './Form7.js';
import UserList from './UserList.js';
function Root(){
    let[users,setUsers] = useState([]);
    return(
    <div className="container">
        <div className="row">
            <div className="col">
                <Form7 setUsers={setUsers} users={users} />
            </div>
            <div className="col">
                <UserList users = {users} />
            </div>
        </div>
    </div>
    );
}
export default Root ;    