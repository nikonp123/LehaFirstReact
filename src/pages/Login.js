import React, { useContext } from 'react';
import { AuthContext } from '../context';

function Login(props) {
    const {isAuth,setIsAuth} = useContext(AuthContext);

    const authSubmitHandler = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true');
    }

    return (
        <div>
            <h1>Login</h1>    
            <form onSubmit={authSubmitHandler}>
            <input type="text" placeholder='Enter login'/>
            <input type="password" placeholder='Enter password'/>
            <button>Enter</button>
            </form>
        </div>
    );
}

export default Login;