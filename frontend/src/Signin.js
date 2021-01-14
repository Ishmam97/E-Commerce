import React , { useState } from 'react';
import {Link} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import equals from 'validator/lib/equals'

import showMsg from './helpers/Message'
import './css/signin.css'
import toggleForm from './js/signin';
import showLoading from './helpers/Loading'
import signUp from '../api/auth'

const Signin = () =>{
    let state = {
        signin: true,
        signup: false,

    }
    let showSignup= () =>{
        state = {
            signin: false,
            signup: true,
        }
    }
    let showSignin= () =>{
        state={
            signin: true,
            signup: false,
        }
    }
    
    const [formData , setFormData] = useState({
        uname:'ishmeme',
        email:'ishmeme@me.com',
        pass:'abc123',
        pass2:'abc123',
        successMsg:false,
        errorMsg:false,
        Loading:false,
    })
    const {uname , email , pass , pass2 , successMsg , errorMsg , Loading} = formData;

    const handleChange=(evt)=>{
        setFormData({
            ...formData,
            [evt.target.name]:evt.target.value,
            successMsg:'',
            errorMsg:''
        })
    }
    const signinSubmit = (evt)=>{
        evt.preventDefault();
        if (isEmpty(uname) || isEmpty(pass) ){
            setFormData({
                ...formData,errorMsg:'All fields must be filled', successMsg:false
            })
        }else if(pass.length < 6){
            
            setFormData({
                ...formData , errorMsg:'Password must be 6 digits minimum', successMsg:false
            })
        }else{
            //success
            setFormData({
                ...formData , successMsg:'Successful validation!' , errorMsg:false
            })
        }

        console.log(formData)
        console.log("from signin")
    }
    const signupSubmit = (evt)=>{
        evt.preventDefault();

        //client side form validation
        
        if (isEmpty(uname) || isEmpty(email) || isEmpty(pass) || isEmpty(pass2) ){
            setFormData({
                ...formData,errorMsg:'All fields must be filled', successMsg:false
            })
        }else if(!isEmail(email)){
            setFormData({
                ...formData,errorMsg:'Invalid Email', successMsg:false
            })
        }else if(pass.length < 6){
            
            setFormData({
                ...formData , errorMsg:'Password must be 6 digits minimum', successMsg:false
            })
        }else if(!equals(pass , pass2)){
            setFormData({
                ...formData , errorMsg:'Passwords dont match!'  , successMsg:false
            })
        }else{
            //success
            
            const{ uname , email , pass} = formData
            const data = { uname , email , pass}
            setFormData({
                ...formData  , errorMsg:false , Loading:true,
            })
            signUp(data).then(response =>{
                console.log('success' , response)
                setFormData({
                    uname:'',
                    email:'',
                    pass:'',
                    pass2:'',
                    successMsg:response.data.successMessage,
                    errorMsg:false,
                    Loading:false,
                })
            }).catch(err=>{
                console.log('Error in axios' , err)
                setFormData({
                    ...formData,
                    errorMsg:'Error occured',
                    Loading:false,
                })
            })
            
        }
        console.log(formData)
    }
    const SigninForm=()=>{
        return(
            <section className="section">
                    
                    <CSSTransition
                    in={state.signin}
                    timeout={400}
                    classNames="wrapper-transition"
                    unmountOnExit
                    appear
                    onEntered={showSignup}
                    onExit={showSignin}
                    >
                        <div className="wrapper">
                            <div className="user singinBx">
                                <div className="imgBx" >
                                    <img src="https://picsum.photos/seed/dicsum/400/500" alt="random pic"/>                    
                                </div>
                                <div className="formBx">
                                    <form onSubmit={signinSubmit} noValidate>
                                        <h2>Sign In</h2>
                                        <input className="input" type="text" name="uname" value={uname} placeholder="Username" onChange={handleChange}/>
                                        <input className="input" type="password" name="pass" value={pass} placeholder="password" onChange={handleChange}/>
                                        <input className="input"  type="submit" value="Login"/>
                                        <p className="signup">Don't have an account? <Link to='#' onClick={(event)=>{
                                            toggleForm();                                    
                                        }} id="sup">Sign Up.</Link></p>
                                    </form>
                                </div>
                            </div>
                            <div className="user singupBx">                    
                                <div className="formBx">
                                    <form onSubmit={signupSubmit} noValidate>
                                        <h2>Create an account</h2>
                                        <input className="input" type="text" name="uname" value={uname} placeholder="Username" onChange={handleChange}/>
                                        <input className="input" type="email" name="email" value={email} placeholder="Email Address" onChange={handleChange}/>
                                        <input className="input" type="password" name="pass" value={pass} placeholder="Create password" onChange={handleChange}/>
                                        <input className="input" type="password" name="pass2" value={pass2} placeholder="Confirm password" onChange={handleChange}/>
                                        <input className="input"  type="submit" value="Sign up"/>
                                        <p className="signup">Already have an account? <Link to='#' onClick={(event)=>{
                                            toggleForm();                                    
                                        }} id="sin">Sign In.</Link></p>
                                    </form>
                                </div>
                                <div className="imgBx" >
                                    <img src="https://picsum.photos/seed/picsdum/400/500" alt="random pic"/>                    
                                </div>
                            </div>
                            
                        </div>
                    </CSSTransition>
                    
                </section>
                )
    }      
    



    return(
        <div>
            {errorMsg && showMsg(errorMsg , 0)}
            {successMsg && showMsg(successMsg , 1)}
            {Loading && <div className="vh-100 d-flex justify-content-center align-items-center">{showLoading()}</div>}
            {SigninForm()}
        </div>
    )
}

export default Signin;