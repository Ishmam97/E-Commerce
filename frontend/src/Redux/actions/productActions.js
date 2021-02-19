import axios from 'axios'
import {START_LOADING , STOP_LOADING} from '../constants/loadingConstants'
import {SHOW_SUCCESS_MESSAGE , SHOW_ERROR_MESSAGE} from '../constants/messageConstants'
import { GET_PRODUCTS , CREATE_PRODUCTS} from '../constants/productConstants'

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