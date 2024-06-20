import React from "react";
function User(props) {
  if (!props.data) {
    return null;
  }
  return (
    <div>
      <div className="card border p-3" style={{minWidth:'250px'}}>
                <div className="card-title text-info">{props.data.id}. {props.data.username}</div>
                <div>
                  {props.data.name}
                </div>
                <div>{props.data.email}</div>
        </div>
    </div>
  );
}
export default User;