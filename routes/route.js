import  express from "express";
import getNews from '../controller/news-controller.js'
const route = express.Router();
// .get as get is written in axios of client 
route.get('/news', getNews)


export default route;