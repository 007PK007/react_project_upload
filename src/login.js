import React from 'react';

const Login = (props) => {

    const{
        name,
        setName,
        email,
        setEmail,
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return(
        
        <section className="login">
        <div className="loginContainer">
            <label>name</label>
            <input 
            type="text"
            autoFocus
            required
            value={name}
            onChange={(e) => setName(e.target.value) }
            />

            <label>Username</label>
            <input 
            type="text" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}          
            />
            <p className="errorMsg">{emailError}</p>

            <label>password</label>
            <input 
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}          
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                { hasAccount ? (
                  <>
                    <button onClick={handleLogin}>Sign in</button>
                    <p>don't have a account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                    </p>
                    </>
                    ) : (
                        <>
                    <button onClick={handleSignup}>Sign up</button>
                    <p>have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span> </p>
                    
                    </>
                    )
                }
            </div>
        </div>
        </section>
        
    )
}

export default Login;