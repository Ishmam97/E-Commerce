import react from 'react';
import {Link} from 'react-router-dom'
import './css/signin.css'


const Signin = ()=>{
    
    return(
        <section className="section">
            <div className="wrapper">
                <div className="user singinBx">
                    <div className="imgBx">
                        <img src="https://picsum.photos/600/600" alt="random pic"/>                    
                    </div>
                    <div className="formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" name="uname" placeholder="Username"/>
                            <input type="password" name="pass" placeholder="password"/>
                            <input type="submit" value="Login"/>
                            <p className="signup">Don't have an account? <Link to='#'>Sign Up.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signin;