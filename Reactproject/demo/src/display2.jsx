import { useState } from "react";

function Display2(){
 const [name,setName]=useState()
    console.log("the data is :",name)
    return(
        <>
        <h1>im from display2 {name}</h1>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
        </>
    )
}
export default Display2
                                                                                                                    

               
