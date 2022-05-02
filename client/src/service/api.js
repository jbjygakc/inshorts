import axios from 'axios'

// .then old concept whenever recieve promise data by api call to proceed  so new Es6 concept is to use await with "async" function 
export const getnews = async () => {
    const URL = "http://localhost:8000";
    try {
        return await axios.get(`${URL}/news`);
        // getting data by api call by axios 
  }
    catch (error) {
        console.log('Error is ', error)
    }

}