

import News from "../model/new-schema.js"

// response is use when thigs to send from backend 
// request contains body , header.. of api when api is hit fromm backend 
 const getnews = async (request,response) => {

    try {
        // find func help to get data from mongodb database conditionally or unconditionally
        let data =await News.find({});
        response.status(200).json(data);
    } catch (error) {
        response.status(200).json({message: data.message});
    }
}
export default getnews;