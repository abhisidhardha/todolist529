import { useForm } from "react-hook-form";
function Form7(props){
    let {register,handleSubmit,formState:{errors}} = useForm();
    function handleFormSubmit(userobj){
        props.setUsers([...props.users,userobj]);
        console.log(userobj);
    }
    return(
        <div>
                <div className="display-1 text-center">Form Demo</div>
                <form div className="m-5" onSubmit={handleSubmit(handleFormSubmit)}>
                <input className="form-control w-50 mx-auto mb-4" type="text" placeholder="Username" id="u"{...register("username",{required:true,minLength:4,maxLength:8})}/>
                {errors.username?.type==='required' && <p className="text-danger text-center">Username is required</p>}
                {errors.username?.type==='minLength' && <p className="text-danger text-center">Username should have minimum length of 4 </p>}
                {errors.username?.type==='maxLength' && <p className="text-danger text-center">Username should have maximum length of 8 </p>}

                <label className="d-block w-50 mx-auto" htmlFor="dob">Date of Birth</label>
                <input className="form-control w-50 mx-auto mb-4" type="date" id="d" {...register("dob",{required:true})}/>
                {errors.dob?.type==='required' && <p className="text-danger text-center">Date of Birth is required</p>}

                <input className="form-control w-50 mx-auto mb-4" type="text" placeholder="City" id="c" {...register("city",{required:true})}/>
                {errors.city?.type==='required' && <p className="text-danger text-center">City is required</p>}

                <input type="submit" className="btn btn-success d-block mx-auto" value="Add User" />
                </form>
        </div>
    );
}
export default Form7 ;