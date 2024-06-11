import axios from 'axios'
import {START_LOADING , STOP_LOADING} from '../constants/loadingConstants'
import {SHOW_SUCCESS_MESSAGE , SHOW_ERROR_MESSAGE} from '../constants/messageConstants'
import { GET_PRODUCTS , CREATE_PRODUCTS , DELETE_PRODUCT , EDIT_PRODUCT} from '../constants/productConstants'

export const createProduct = formData => async dispatch=>{
    try{
        dispatch({type : START_LOADING})
        const resp = await axios.post('/api/product' , formData)
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_SUCCESS_MESSAGE , payload: resp.data.successMsg})
        dispatch({type : CREATE_PRODUCTS , payload: resp.data.product})
        

    }catch(err){
        console.log("CREATE PRODUCT ERROR")
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_ERROR_MESSAGE , payload: err.resp.data.errorMsg})
    }
}
export const getProducts = () => async dispatch=>{
    try{
        dispatch({type : START_LOADING})
        const resp = await axios.get('/api/product')
        dispatch({type : STOP_LOADING})
        dispatch({type : GET_PRODUCTS , payload: resp.data.products})        

    }catch(err){
        console.log("GET PRODUCT ERROR")
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_ERROR_MESSAGE , payload: err.resp.data.errorMsg})
    }
}
export const delProduct = (pId ) => async dispatch=>{
    try{
        dispatch({type : START_LOADING})
        const resp = await axios.delete(`/api/product/${pId}`)
        dispatch({type : STOP_LOADING})
        dispatch({type : DELETE_PRODUCT , payload: resp.data})        

    }catch(err){
        console.log("DELETE PRODUCT ERROR")
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_ERROR_MESSAGE , payload: err.resp.data.errorMsg})
    }
}
export const editProduct =(pId , formData ) =>async dispatch=>{
    try{
        dispatch({type : START_LOADING})        
        const resp = await axios.patch(`/api/product/${pId}` , formData)
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_SUCCESS_MESSAGE , payload: resp.data.successMsg})
        dispatch({type : EDIT_PRODUCT , payload: resp.data.edited})   
    }catch(err){
        console.log("EDIT PRODUCT ERROR" , err)
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_ERROR_MESSAGE , payload: err.resp.data.errorMsg})
    }

}