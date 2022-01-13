import React from 'react'

const Home = (props) => {
    const reloading = () => {
        localStorage.clear();
        // window.location.reload();
        props.logout();
    }
    return (
        <div className='loggedin'>
            <h1>HELLO WELCOME</h1>
            <button onClick={reloading}>Logout</button>
        </div>
    )
}

export default Home
