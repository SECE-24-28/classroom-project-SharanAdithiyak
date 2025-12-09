import { useState } from "react"
const Display6=()=>{
    const [name,setName] =useState("")
function info(e){
    e.preventDefault()
    console.log("my name is: ",name)
}
    return(      
        <>
        <h1>im from disp6 my name is  </h1>
      
        <form onSubmit={info}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <input type="submit" value="click here!!!!"></input>
        </form>
        </>
    )
}
export default Display6