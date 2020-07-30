import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
function Login(props){
    const [username, setUsername] = useState(''),
    [password, setPassword] = useState('');


    function login() {
        axios.post('/auth/login', {username: username, password: password})
        .then(res => {
            props.history.push('/Register-vehicle')
        })
    }





    return(
        <div className="box">
            <header><span>RENTALZ</span><div><Link className="link" to="/">Home</Link></div></header>
        <div className="formcont">
            <div className="form"><span>Login</span>
            <div><span>Username<br></br><input value={username} onChange={e => setUsername(e.target.value) }></input></span></div>
            <div><span>Password<br></br><input type='password' value={password} onChange={e => setPassword(e.target.value) }></input></span></div>
            </div>
            <div className="spacer"><button onClick={login}>Sign in</button></div>
        </div>
        </div>
    )
}
export default Login;