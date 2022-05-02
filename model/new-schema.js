import mongoose from "mongoose";

// schema if feature of mongoose lib to validate object befor putting it to database 

const newSchema= mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true,
        unique:true
    },
    timestamp: {
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    }
});
// model function help us to create table or collections of name given here as "news" withh validation entries
const news = mongoose.model('news',newSchema);

export default news;