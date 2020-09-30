const express=require ("express")


const app = express()
const bodyparser=require("body-parser")
const cors=require('cors')
require('dotenv/config');

//import routers
const PostsRouter=require('./routes/posts');

// middleware 
app.use(bodyparser.json())
app.use(cors())
app.use('/posts',PostsRouter)


=
//connection to db 
const moongoose=require("mongoose")
moongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log("Connected to db"))


// db.once ('open',()=>console.log("Connected to database "))
app.listen(3000,()=> console.log('Server started '));