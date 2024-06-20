import './Navbar.css' ;
function Navbar(){
    return(
        <div class="navbar w-100 d-flex justify-content-between">
                <img src="https://i.pinimg.com/originals/26/16/26/261626808dc2a3d342e61c4ef377e709.png" />
                <div className="d-flex justify-content-around">
                   <p className='nav p-3'>Home</p>
                   <p className='nav p-3'>Signup</p>
                   <p className='nav p-3'>Login</p>
                   <p className='nav p-3 pr-5'>About</p>
                </div>
        </div>
    )
}
export default Navbar ;