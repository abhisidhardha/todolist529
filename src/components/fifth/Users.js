import { useEffect, useState } from "react";
import User from "./User";
import Usercount from "./Usercount"

function Users() {
  let [users, setUsers] = useState([]);
  let [usersAddedCount, setusersAddedCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersList) => setUsers(usersList));
  }, []);

  function AddUser() {
    setusersAddedCount(usersAddedCount + 1);
  }
  return (
    <div >
    
    <Usercount count={usersAddedCount} />
      <div className="d-flex container justify-content-between">
        <div className="row">
        <div className="col-xl-3 m-5 border p-2 col-md-6">
          <User data={users[0]} />
          <button className="btn mt-3 w-40 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border  p-2 col-md-6">
          <User data={users[1]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border p-2 col-md-6">
          <User data={users[2]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border p-2 col-md-6">
          <User data={users[3]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border p-2 col-md-6">
          <User data={users[4]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border  p-2 col-md-6">
          <User data={users[5]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border p-2 col-md-6">
          <User data={users[6]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border p-2 col-md-6">
          <User data={users[7]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
        </div>
        <div className="col-xl-3 m-5 border p-2 col-md-6">
          <User data={users[8]} />
          <button className="btn mt-3 btn-success" onClick={AddUser}>
            Add User
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;