var mypromise=new Promise((resolve,reject)=>{
    let condition=true
    if(condition){
        resolve()
    }else{
        reject()
    }
})
mypromise.then(success).catch(failure)
function success(){
    console.log("Promise is Resolved Successfully") 
}
function failure(){
    console.log("Promise is Rejected")  
}

 ///////////////////////////////////////////////////////////////
var promise2=new Promise((resolve,reject)=>{
    let condition=true
    if(condition){
        resolve("Data Resolved Successfully")
    }else{
        reject("Data Rejected")
    }
})

promise2.then((meg)=>{
    console.log(meg)
}).catch((msg)=>{
    console.log(msg)
})

//////////////////////////////////////////////////////////////
function fun(){
    return new Promise((resolve,reject)=>{
        let condition=true
        if(condition){
            resolve("Function Promise Resolved")
        }else{
            reject("Function Promise Rejected")
        }
    })
}
fun().then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)    
})

//////////////////////////////////////////////////////////////
async function asyncfun(){
    try{
        let result=await fun()
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
asyncfun()
///////////////////////////////////////////////////////////////