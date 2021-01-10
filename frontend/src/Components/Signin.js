import React , { Component } from 'react';
import {Link} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import './css/signin.css'
import toggleForm from './js/signin';


class Signin extends Component{
    state = {
        signin: true,
        signup: false,

    }
    showSignup= () =>{
        this.setState(prevState=>({
            signin: false,
            signup: true,
        }))
    }
    showSignin= () =>{
        this.setState(prevState=>({
            signin: true,
            signup: false,
        }))
    }

    render() {
        return(
            <section className="section">
                <CSSTransition
                in={this.state.signin}
                timeout={400}
                classNames="wrapper-transition"
                unmountOnExit
                appear
                onEntered={this.showSignup}
                onExit={this.showSignin}
                >
                    <div className="wrapper">
                        <div className="user singinBx">
                            <div className="imgBx" >
                                <img src="https://picsum.photos/seed/dicsum/400/500" alt="random pic"/>                    
                            </div>
                            <div className="formBx">
                                <form>
                                    <h2>Sign In</h2>
                                    <input className="input" type="text" name="uname" placeholder="Username"/>
                                    <input className="input" type="password" name="pass" placeholder="password"/>
                                    <input className="input"  type="submit" value="Login"/>
                                    <p className="signup">Don't have an account? <Link to='#' onClick={(event)=>{
                                        toggleForm();
                                        this.showSignup();
                                    }} id="sup">Sign Up.</Link></p>
                                </form>
                            </div>
                        </div>
                        <div className="user singupBx">                    
                            <div className="formBx">
                                <form>
                                    <h2>Create an account</h2>
                                    <input className="input" type="text" name="uname" placeholder="Username"/>
                                    <input className="input" type="email" name="email" placeholder="Email Address"/>
                                    <input className="input" type="password" name="pass" placeholder="Create password"/>
                                    <input className="input" type="password" name="pass" placeholder="Confirm password"/>
                                    <input className="input"  type="submit" value="Sign up"/>
                                    <p className="signup">Already have an account? <Link to='#' onClick={(event)=>{
                                        toggleForm();
                                        this.showSignin();
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
        );
    }
}

export default Signin;