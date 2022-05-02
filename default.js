

import {data} from './constants/data.js'
import News from './model/new-schema.js'

// this fucntion will put data to our cloud databse 
const DefaultData = async () =>
{
//  here inserting data imported to "news" colloection/table  by using mongoose funstion insertMany 
    try {
        
       await News.insertMany(data);
       console.log('data inserted into table successfully / data imported ');

    } catch (error) {
        console.log("Error in putting data in cloud is ",error.message);
    }
}

export  default DefaultData;