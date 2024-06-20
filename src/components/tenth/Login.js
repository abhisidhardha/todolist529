import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate,Link } from "react-router-dom";
import { compareSync, hashSync } from "bcryptjs";
function Login(){
    let {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate()
    function onLoginFormSubmit(userCrdentialsObject) {
        fetch(
          `http://localhost:4000/users?username=${userCrdentialsObject.username}`,
          { method: "GET" }
        )
          .then((res) => res.json())
          .then((userObjArray) =>{
            if(userObjArray.length===0){
              alert("Invalid Username")
            }else{
              let result=compareSync(userCrdentialsObject.password,userObjArray[0].password)
             if(result===true){
                navigate("/user-dashboard")
             }else{
              alert("Invalid password")
             }
            }
          } );
      }
    return(
      <div>

            
      <div className="vh-100 bg-primary text-white d-flexjustify-content-center align-items-center">
            <form className="w-50 rounded-3 mx-auto" onSubmit={handleSubmit(onLoginFormSubmit)}>
                <h1 className="text-center display-1 mb-5">Login</h1>
                <div className="w-100"> 
                <input className="form-control w-50 mx-auto mb-4" type="text" placeholder="Username" id="u"{...register("username",{required:true,minLength:4,maxLength:8})}/>
                {errors.username?.type==='required' && <p className="text-danger text-center">Username is required</p>}
                {errors.username?.type==='minLength' && <p className="text-danger text-center">Username should have minimum length of 4 </p>}
                {errors.username?.type==='maxLength' && <p className="text-danger text-center">Username should have maximum length of 8 </p>}

                <input className="form-control w-50 mx-auto mb-4" type="password" placeholder="Password" id="u"{...register("password",{required:true})}/>
                {errors.password?.type==='required' && <p className="text-danger text-center">Password is required</p>}
                <input type="submit" className="btn btn-success d-block mx-auto m-3" value="Add User" />
                </div>
            </form>
            <p className="text-center">
                New ! <Link to='/register' className="text-white">Register
                </Link>
            </p>
          </div>
        </div>
    );
}
export default Login ;