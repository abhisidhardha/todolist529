import "./Footer.css" ;
function Footer(){
    return(
        <div className="footer">
            <div className="container d-flex justify-content-around">
                <div className="col p-5">
                    <p className="text-center"><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png"/>India</p>
                    <p className="text-center">+91 IND: 94373473434 </p>
                    <p  className="text-center">abcdefgh@xyz.com</p>
                </div>
                <div className="col p-5">
                    <h1 className="text-light">About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus arcu, sodales sit amet nunc in, cursus cursus magna. Quisque vitae metus suscipit, aliquam tortor eu, auctor nisi. Morbi sed laoreet lacus, sed finibus mi. Vivamus tristique cursus mattis. Praesent vitae massa eget ante elementum imperdiet. Nulla facilisi. Nulla at dui vehicula, pretium orci non, tincidunt urna. Vestibulum metus purus, hendrerit rutrum nibh ac, commodo maximus diam. Aenean sed ornare dolor</p>
                </div>
            </div>
           
        </div>
    )
}
export default Footer ;