import {useForm} from "react-hook-form" ;
import {useState} from "react";
import "../sixth/Form.css" ;
function Form(){             
    let {register,handleSubmit,formState: {errors}} = useForm();
    let [users,setUsers] = useState([]);
    function handleFormSubmit(userObj){
        setUsers([...users,userObj]);
        console.log(userObj);
    }
    return(
    <div>
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <form className="w-50 rounded-3 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                <h1 className="text-center display-1">Form Demo</h1>
                <div className="row w-100"> 
                {/* Name */}
                    <div className="col">
                    <input className="form-control m-3" type="text" id="f" placeholder="First Name" {...register("firstname",{required:true,minLength:4,maxLength:6})}/>
                    {errors.firstname?.type==='required' && <p className=" p-2 ">*Firstname is required</p>}
                    {errors.firstname?.type==='minLength' && <p className=" p-2">*Minimum Length is 4</p>}
                    {errors.firstname?.type==='maxLength' && <p className=" p-2">*Maximum Length is 6</p>}
                    </div>
                    <div className="col">
                    <input className="form-control m-3" type="text" id="l" placeholder="Last Name" {...register("lastname",{required:true,minLength:4,maxLength:6})}/>
                    {errors.lastname?.type==='required' && <p className=" p-2">*Lastname is required</p>}
                    {errors.lastname?.type==='minLength' && <p className=" p-2">*Minimum Length is 4</p>}
                    {errors.lastname?.type==='maxLength' && <p className=" p-2">*Maximum Length is 6</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* Email */}
                        <input className="form-control m-3" type="email" placeholder="Email" id="e" {...register("email",{required:true})} />
                        {errors.email?.type==='required' && <p className="p-2">*Email is required</p>}
                    </div>
                    <div className="col m-3">
                        {/* Gender */}
                        <label htmlFor="gender">Gender</label>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="male" {...register("gender",{required:true})}/>
                        <label class="form-check-label" for="gender">Male</label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="female" {...register("gender",{required:true})}/>
                        <label class="form-check-label" for="gender">Female</label>
                        </div>
                        {errors.gender?.type==='required' && <p className="p-2">*Gender is required</p>}
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col">
                        {/* Number */}
                        <input className="form-control m-3" type="text" placeholder="Phone Number" id="p" {...register("phonenum",{required:true,minLength:10,maxLength:10})}/>
                        {errors.phonenum?.type==='required' && <p className="p-2">*Phone Number is required</p>}
                        {errors.phonenum?.type==='minLength' && <p className="p-2">*Length should be 10</p>}
                        {errors.phonenum?.type==='maxLength' && <p className="p-2">*Length should be 10</p>}
                    </div>
                    <div className="col">
                        {/* Language */}
                        <input className="form-control m-3" type="date" id="d" {...register("date",{required:true})}/>
                        {errors.date?.type==='required' && <p className="text-center p-2">*Date is required</p>}
                    </div>
                </div>
                        <select className="form-select m-5 mx-auto w-75" id="s" defaultValue="" {...register("subject",{required:true})} >
                        <option value="" disabled>Select subject</option>
                        <option value="html">Html</option>
                        <option value="css">Css</option>
                        <option value="javascript">Javascript</option>
                        </select>
                        {errors.subject?.type==='required' && <p className="text-center p-2">*Please Select a Subject</p>}
                <input type="submit" className="btn btn-success d-block mx-auto" value="Submit" />
            </div>
            </form>
        </div>
     </div>
        );
}
export default Form ;