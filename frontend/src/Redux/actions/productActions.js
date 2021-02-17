import axios from 'axios'
import {START_LOADING , STOP_LOADING} from '../constants/loadingConstants'
import {SHOW_SUCCESS_MESSAGE , SHOW_ERROR_MESSAGE} from '../constants/messageConstants'

export const createProduct = formData => async dispatch=>{
    try{
        dispatch({type : START_LOADING})
        const resp = await axios.post('/api/product' , formData)
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_SUCCESS_MESSAGE , payload: resp.data.successMsg})
        

    }catch(err){
        console.log("CREATE PRODUCT ERROR")
        dispatch({type : STOP_LOADING})
        dispatch({type : SHOW_ERROR_MESSAGE , payload: err.resp.data.successMsg})
    }
}