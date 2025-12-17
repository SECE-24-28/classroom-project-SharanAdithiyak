/*import Display from "./display"

function App() 
{
 var  name="demo";
 var val1=23;
 const arr=[12,23,34]
 const person={name:"sharan", gender:'male'}
  return (
    <>
     <h1> welcome</h1>
     <Display name={name} a={val1} arr={arr} obj={person}/>
     </>
  )
}

export default App  
 */



import { useEffect, useState } from "react"
 

const Display4=()=>{
    const[student,setStudent]=useState({
        name:"nandhini",
        gender:"female",
        mobile:12222222
    })
     
    function updateName(){
        setStudent( {name:"demo"})
           
         
    }
    return(
 <>
     
 <h1>name:{student.name}</h1>
 <h1>gender:{student.gender}</h1>
 <h1>mobile:{student.mobile}</h1>
 <button onClick={updateName}>change name</button>
 </>
    )
  
     
}
export default Display4

