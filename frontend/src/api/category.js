import axios from "axios"

export const createCategory = async(data)=>{
    const config ={
        headers:{
            'Content-type':'application/json'
        }
    }

    const response = await axios.post('/api/category' , data , config)
    return response
}
export const getCategories = async()=>{
    
    const response = await axios.get('/api/category')
    return response
}