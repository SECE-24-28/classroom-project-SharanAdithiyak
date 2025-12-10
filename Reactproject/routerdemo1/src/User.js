import { useParams } from "react-router-dom"

function User(){
    const data= useParams()
    return(
        <>
        
        <h1>im from users {data.id}</h1>
        </>
    )
}

export default User