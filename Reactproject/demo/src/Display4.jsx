import { useEffect, useState } from "react"
 

const Display4=()=>{
    const[student,setStudent]=useState({
        name:"nandhini",
        gender:"female",
        mobile:12222222
    }) 
     console.log("the current state: ",student)
    function updateName(){
        // setStudent( {name:"demo"})
      setStudent((previousData)=>{
        console.log("pre data: ..............",previousData)
return({...previousData,name:"demo",mobile:9585524527})
      })
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

