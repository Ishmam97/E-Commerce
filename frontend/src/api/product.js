import axios from "axios"

export const createProduct = async(data)=>{
    const config ={
        headers:{
            'Content-type':'application/json'
        }
    }

    const response = await axios.post('/api/product' , data , config)
    return response
}
export const getProducts = async()=>{
    
    const response = await axios.get('/api/product')
    return response
}
export const delProduct = async()=>{
    const resp = await axios.delete('/api/product')
    return resp
}