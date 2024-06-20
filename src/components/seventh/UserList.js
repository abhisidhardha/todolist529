import {} from './Root.js' ;
function Userlist(props){
    return(
        <div className=''>
            <p className='display-1'>
                Users List
            </p>
            <div className='d-flex justfiy-content-center align-items-center'>
                <table className='table table-bordered table-striped table-hover' >
                    <thead className='thead-primary'>
                        <tr>
                            <th>Username</th>
                            <th>Date of birth</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            {
                            props.users.map((userObj,index) =><p key={index}>{userObj.username}</p>)
                            }
                        </td>
                        <td>
                            {
                            props.users.map((userObj,index) =><p key={index}>{userObj.dob}</p>)
                            }
                        </td>
                        <td>
                            {
                            props.users.map((userObj,index) =><p key={index}>{userObj.city}</p>)
                            }
                        </td>
                    </tbody>
            </table>
            </div>
            

        </div>
    );
}
export default Userlist 