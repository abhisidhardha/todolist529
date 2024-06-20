
function User(props){
    return(
        <div className="card" style={{height:'500px'}}>
            <div style={{objectFit:'cover'}}>
                <img className="card-img" src={props.Userdata.avatar}/>
            </div>
            <div className="card-body bg-light">
                <div>{props.Userdata.id}.</div>
                <div className="card-title text-info">{props.Userdata.first_name} {props.Userdata.last_name}</div>
                <div>{props.Userdata.email}</div>
            </div>
        </div>
    )
}
export default User ;