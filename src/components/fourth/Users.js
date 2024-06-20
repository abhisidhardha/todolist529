import User from "./User";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Users.css' ;
function Users(){
    let data = [
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 4,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 5,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 6,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      ];
    return(
        <div className="a">
          <div className=""><Navbar/></div>
                <div className="container">
                  <div className="row">
                    <div className="col p-5"><User Userdata = {data[0]}/></div>
                    <div className="col p-5"><User Userdata = {data[1]}/></div>
                    <div className="col p-5"><User Userdata = {data[2]}/></div>
                  </div>
                  <div className="row">
                    <div className="col p-5"><User Userdata = {data[3]}/></div>
                    <div className="col p-5"><User Userdata = {data[4]}/></div>
                    <div className="col p-5"><User Userdata = {data[5]}/></div>
                  </div>
                </div>
          <div className=""><Footer/></div>
        </div>
    );
}
export default Users ;