import "./Prod.css"
function Prod(props){
    
          return (
            <div>
              <div className="card p-3">
                <div className="card-img-top">
                  <img src={props.userData.image} className="w-100 h-100 p-2 mx-auto rounded-5"/>
                </div>
                <div className="card-body">
                  <h5 className="text-primary p-1" >{props.userData.id}. {props.userData.title}</h5>
                </div><div className="card-footer">
                  <h4 className="text-danger ">${props.userData.price}</h4>
                  <h4 className="text-danger ">Rating : {props.userData.rating.rate} ({props.userData.rating.count})</h4>
                </div>
              </div>
            </div>
          );

    }
export default Prod ; 