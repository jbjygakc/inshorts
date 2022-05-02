import express from 'express';
import cors from "cors";
import Connection from './databse/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js'
import dotenv from 'dotenv';


const app=express();

//initailizing dotenv
dotenv.config();

app.use(cors());
app.use('/',Route)


const PORT = process.env.PORT || 8000;
const URL=process.env.MONGODB_URI || `mongodb://user:helloworld@inshorts-clone-shard-00-00.cbjgy.mongodb.net:27017,inshorts-clone-shard-00-01.cbjgy.mongodb.net:27017,inshorts-clone-shard-00-02.cbjgy.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-51z7in-shard-0&authSource=admin&retryWrites=true&w=majority`

// connection to databse established 
Connection(URL);

if(process.env.NODE_ENV=== 'production'){
    app.use(express.static('client/build'));
}


// server created
app.listen(PORT,() => console.log('server is runng at 8000'));

// data import
DefaultData();