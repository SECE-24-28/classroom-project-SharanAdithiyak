import { useState } from "react"
function Task3(){
    const [Student,setStudent]=useState({
        Name:"",
        Age:""
    })
    function Change(e){
        setStudent((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
    function showStudent(e){
        if(Student.Name===""){
            document.getElementById("sName").innerHTML="Name Cannot be Empty"
            document.getElementById("sName").style.color="red"
        }
        if(Student.Age===""){
            document.getElementById("sAge").innerHTML="Age Cannot be Empty"
            document.getElementById("sAge").style.color="red"
        }
        console.log("Name : ",Student.Name)
        console.log("Age : ",Student.Age)
        e.preventDefault()
    }
    return(
        <>
        <h1>This is Display5 Component</h1>
        <form onSubmit={showStudent}>
            <input type="text" onChange={Change} name="Name" value={Student.Name}></input> <span id="sName"></span> <br></br> <br></br>
            <input type="text" onChange={Change} name="Age" value={Student.Age}></input> <span id="sAge"></span> <br></br> <br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </>
    )
}
export default Task3