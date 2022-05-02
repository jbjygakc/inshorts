import React, { useEffect ,useState} from 'react'
import { Box, Typography,styled } from "@mui/material"
import { getnews} from '../service/api.js'
import Article from './Article.jsx';


function Articles() {

const [news,setNews] =useState([]);

    useEffect(() => {
   dailyNews();
    },[])

    const dailyNews = async() => {
        let response= await getnews();
        
        setNews(response.data);
    // here getnews also return promise so await is used with it and so async  is used naturally 
    }
  return (
    <Box>
    {
        news.map( data => (
          <Article data= {data}/>
            ))
        }
    </Box>
  )
}

export default Articles;