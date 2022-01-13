import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { useState, useEffect } from 'react'

import Home from './components/Home';


const App = () => {
    
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if(isAuthenticated !== null){
            setIsAuth(true);
        }

    }, [isAuth])

    const loggingOut = () => {
        setIsAuth(false);
    }

    const loggingIn = () => {   
        setIsAuth(true);
    }

    return (
        <div className='App'>
            {isAuth ? <Home logout={loggingOut} /> : <LoginForm login={loggingIn}/>}
        </div>
    )
}

// function Test(props) {
//     // const isAuthenticated = localStorage.getItem('isAuthenticated');

//     if(props.isAuth){
//         return <Home />
//     }else {
//         return <LoginForm/>
//     }
// }

export default App
