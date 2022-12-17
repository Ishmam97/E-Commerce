import {setCookie , getCookie , delCookie} from './cookies'
import {setLocalStorage , getLocalStorage , delLocalStorage} from './localStorage'

export const setAuthentication = (token , user)=>{
    setCookie('token' , token);
    setLocalStorage('user' , user)
}
export const isAuthenticated = () =>{
    if (getCookie('token') && getLocalStorage('user')){
        return getLocalStorage('user')
    }else{
        return false;
    }
}
export const logout = next=>{
    delCookie('token');
    delLocalStorage('user');
    next();
}