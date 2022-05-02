import React from 'react'
import { Box, Typography,styled } from "@mui/material"

const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';


const Container = styled(Box) (({theme}) => ({
    background: 'red',
    color: 'white',
    display: 'flex' ,
    alignItems: 'center',
    height:'48',
    marginBottom:'30',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
})) ;



const Image =styled('img')({
    height:34,
    // targetting last img element tat is google img 
    '&:last-child' :{
        margin: '0 50px 0 20px'
    }
})

const Text= styled(Typography)`
font-size: 14px;
font-weight: 300;
margin-left: 50px

`
function InfoHeader() {
    return (
        <Container>
            <Text>
                For the best experience use inshorts app on your smartphone
            </Text>
           <Box style={{display: 'flex', marginLeft: 'auto'}} >
               <Image 
                   src={appleStore}
                   alt="logo apple"
               />
               <Image 
                   src={googleStore}
                   alt="logo google"
               />
           </Box>
        </Container>
    )
}

export default InfoHeader