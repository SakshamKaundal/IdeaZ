import axios from 'axios'

const API_URL = "";

export const saveIdeas= async(payload)=>{
    try{

        return await axios.post(`${API_URL}/idea`,payload);
        
    }catch (error){
        console.log('error',error.messsage);
        return error;
    }

}
    export const getAllIdeas = async()=>{
        try{
            await axios.get(`${API_URL}/idea`);
            return;
        
        }catch(error){
            console.log('error',error.messsage);
            return error;
        }

    }
