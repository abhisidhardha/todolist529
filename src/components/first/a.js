import aa from './aa.jpeg' ;
function First(){
  let prr = "React" ; 
  let arr = [1,2,3,4] ;
  return (
    <div>
      <h1>Hello {prr}</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNScU1shdAw1FWAAmm1PqhTDpmLdMESaMhAw&usqp=CAU'/>
      <img src= {aa}/>
      <h1 className='text-primary'>
        Array Display 
      </h1>
      {
        arr.map(arr=><h2>{arr}</h2>)
      }
    </div>
  );
}
export default First;