const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const exhbs=require('express-handlebars')
const dbo=require('./db')
let message='sharan'
app.engine('hbs',exhbs.engine({layoutsDir:'views/',defaultLayout:false,extname:'hbs'}))

app.set('view engine','hbs')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
//     res.render('main',{message})
// })



app.get('/',async(req,res)=>{
    let database=await dbo.getDatabase()
    const collection=database.collection('books')
    const cursor=collection.find({})
    let mydata=await cursor.toArray()
    
    res.render('main',{message,mydata})
     switch(req.query.status){
        case '1':
            message='sharan'
            break
        
        default:
            break;
     }
})


app.post('/store_book',async(req,res)=>{
    let database=await dbo.getDatabase()
    const collection=database.collection('books')
    let bookdata = {title:req.body.title,author:req.body.author}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

app.get('/delete/:id',async(req,res)=>{
    let database=await dbo.getDatabase()
    const collection=database.collection('books');
    const {ObjectId}=require('mongodb');

    await collection.deleteOne({_id:new ObjectId(req.params.id)});
    res.redirect('/?status=3');
});

app.get('/edit/:id',async(req,res)=>{
    let database=await dbo.getDatabase()
    const collection=database.collection('books');
    const {ObjectId}=require('mongodb');
    let bookdata=await collection.findOne({_id:new ObjectId(req.params.id)});
    res.render('edit',{bookdata});
});

app.post('/update_book',async(req,res)=>{
    let database=await dbo.getDatabase();
    const collection=database.collection('books');
    const {ObjectId}=require('mongodb')
    await collection.updateOne(
        {_id:new ObjectId(req.body.id)},
        {$set:{title:req.body.title,author:req.body.author}} );
    res.redirect('/?status=2');
});


app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})




