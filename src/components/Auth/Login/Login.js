import React from 'react';
import './login.css'
const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <section className ="login">
            <div className = "loginContainer" >
                <label> Email </label>
                <input 
                    type="email" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange = {e => setEmail(e.target.value)
                } />
                <p  className = "errorMsg"> {emailError} </p>       
                <label> Password </label>
                <input 
                    type="password" 
                    required 
                    value={password} 
                    onChange = {e => setPassword(e.target.value)
                } />
                <p  className = "errorMsg"> {passwordError} </p>  
                <div className="btnContainer"> 
                    {hasAccount ? (
                        <React.Fragment>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}> sign up </span></p>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <button onClick= {handleSignup}>Sign up</button>
                            <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}>sign in </span></p>
                        </React.Fragment>
                    )}
                </div>  
            </div>
        </section>
    )
}

export default Login;