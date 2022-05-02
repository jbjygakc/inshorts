

// mongoose is a library which help to set up connection with mmongodb coz directly we cannot setup a connection with it
import mongoose from "mongoose"


const Connection= async(URL) => {
    // whenever try to access data from cloud or api always consider exception handling that is presence of any error whichh is done by try and catch 
  
    try {
        // now mongoose coonect func is used to set up connection and it is async function as it set up connection with cloud
        // and so it will return promise so we need to use await 
        await mongoose.connect(URL,{useNewUrlParser: true}); 
       console.log('mongo databse connection setup') 
    } catch (error) {
        console.log('Error while connecting to database is ',error)
        
    }
}
export default Connection;