/*function display(){

   var name="demo";
   console.log("iam inside the display",{name})
   function changename(){
     var name=d
     console.log("inside the dislay",{name})
   }
 return(
  <>
  <h1>im from dis{name}</h1>
  <button onClick={()=>{changename('not done')}}>click here!!! </button>   
  </>
 )
}
export default display
*/

/*import {usestate}from "react"
function display()
{
    const [myname,setmyname]=usestate("hello")
    console.log("iam inside the display",{myname})

    return(
        <>
        <h1>iam from dis1</h1>
        <button onClick={()=>{setmyname('not demo')}}>clcik here!!!</button>
        </>
    )
}
export default display 

*/

import { useState } from "react"

function Display1(datas){
    const {val}=datas;
    
    const [myName,setMyName]= useState("hello")
 
    console.log("im inside the disp1",{myName})
   
    return(
        <>
        <h1>im from dis1{myName}</h1>
        <h1>i've recevied from myGP thru my Parent {val}
             
        </h1>
<button onClick={()=>{setMyName('not demo')}}>click here!!!!</button>
</>
    )
}

export default display  