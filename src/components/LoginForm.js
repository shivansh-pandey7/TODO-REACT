import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import '../assests/LoginForm.css';
import Home from './Home';

const LoginForm = (props) => {
    const [userid, setuserId] = useState('');
    const [pass, setPass] = useState('');

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const [isAuth, setIsAuth] = useState(isAuthenticated);
    const [loading, setLoading] = useState(false);

    const onAdd = () => {
        setLoading(true);
        axios.post('https://reqres.in/api/login', {email:userid, password:pass})
        .then(function(response){
                console.log(userid, pass);
                console.log(response.data);
                localStorage.setItem("isAuthenticated", true);
                localStorage.setItem("token", response.data.token);
                setLoading(false);
                // window.location.reload(true);
                props.login();
            }).catch(function(error){
                console.log(userid, pass);
                console.log(error);
                alert("Wrong username or Password");
                // window.location.reload(true);

            })
    };
    

    return (
        <div className='wrap-loginform'>
            {loading ? <h1>Loading...</h1> : <div className='loginform'>
                <h2 className='heading'>Login Form</h2>
                <div>
                    <input type="text" placeholder='username' value={userid} onChange={e => setuserId(e.target.value)}/>     
                </div>
                <div>
                    <input type="password" placeholder='password' value={pass} onChange={e => setPass(e.target.value)}/>    
                </div>
                
                <button onClick={onAdd}> Login !</button>
            </div>} 
        </div>
        
    );
}

export default LoginForm;