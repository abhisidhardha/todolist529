import { useState } from "react";
import { useForm } from "react-hook-form";
function Register(){
    let {register,handleSubmit,formState:{errors}} = useForm();
    let [users,setUsers] = useState([]);
    function handleFormSubmit(userobj){
        setUsers([...users,userobj]);
        console.log(userobj);
    }
    return(
            <div className="vh-100 bg-primary text-white  d-flex justify-content-center align-items-center">
            <form className="w-50 rounded-3 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                <h1 className="text-center display-1">Register</h1>
                <div className="row w-100"> 
                {/* Name */}
                    <div className="col">
                    <input className="form-control m-3" type="text" id="f" placeholder="First Name" {...register("firstname",{required:true,minLength:4,maxLength:6})}/>
                    {errors.firstname?.type==='required' && <p className="text-danger p-2">*Firstname is required</p>}
                    {errors.firstname?.type==='minLength' && <p className="text-danger p-2">*Minimum Length is 4</p>}
                    {errors.firstname?.type==='maxLength' && <p className="text-danger p-2">*Maximum Length is 6</p>}
                    </div>
                    <div className="col">
                    <input className="form-control m-3" type="text" id="l" placeholder="Last Name" {...register("lastname",{required:true,minLength:4,maxLength:6})}/>
                    {errors.lastname?.type==='required' && <p className="text-danger p-2">*Lastname is required</p>}
                    {errors.lastname?.type==='minLength' && <p className="text-danger p-2">*Minimum Length is 4</p>}
                    {errors.lastname?.type==='maxLength' && <p className="text-danger p-2">*Maximum Length is 6</p>}
                    </div>
                </div>
                
                <div className="row w-100">
                    <div className="col">
                        {/* Email */}
                        <input className="form-control m-3" type="email" placeholder="Email" id="e" {...register("email",{required:true})} />
                        {errors.email?.type==='required' && <p className="text-danger p-2">*Email is required</p>}
                    </div>
                    <div className="col ">
                        {/* Gender */}
                        <h4><label htmlFor="gender " className="mx-3">Gender</label></h4>
                        <div class="form-check mx-3">
                        <input class="form-check-input " type="radio" name="gender" id="male" {...register("gender",{required:true})}/>
                        <label class="form-check-label " for="gender">Male</label>
                        </div>
                        <div class="form-check mx-3">
                        <input class="form-check-input " type="radio" name="gender" id="female" {...register("gender",{required:true})}/>
                        <label class="form-check-label " for="gender">Female</label>
                        </div>
                        {errors.gender?.type==='required' && <p className="text-danger p-2">*Gender is required</p>}
                    </div>
                </div>
                <div className="row w-100">
                <div className="col">
                        
                        <input className="form-control m-3" type="text" placeholder="Phone Number" id="p"{...register("phonenum",{required:true,minLength:10,maxLength:10})} />
                        {errors.phonenum?.type==='required' && <p className="text-danger p-2">*Phone Number is required</p>}
                        {errors.phonenum?.type==='minLength' && <p className="text-danger p-2">*Length should be 10</p>}
                        {errors.phonenum?.type==='maxLength' && <p className="text-danger p-2">*Length should be 10</p>}
                    </div>
                    <div className="col">
                        {/* Date */}
                        <h4 className="mx-3 ">Date of birth</h4>
                        <input className="form-control mx-3 mb-5" type="date" id="d" {...register("date",{required:true})}/>
                        {errors.date?.type==='required' && <p className="text-danger text-center p-2">*Date is required</p>}
                    </div>
                </div>
                <input type="submit" className="btn btn-success d-block mx-auto" value="Submit" />
            </form>
        </div>
    );
}
export default Register ;