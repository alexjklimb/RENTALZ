import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Buy(props){
    const [username, setUsername] = useState(''),
    [password, setPassword] = useState(''),
    [email, setEmail] = useState(''),
    [firstname, setFirstName] = useState(''),
    [lastname, setLastName] = useState(''),
    [verify, setVerify] = useState('');
    
function register(){
        axios.post('/auth/register', {firstname:firstname,lastname:lastname,email:email,username:username,password:password})
        .then(res => {
            props.history.push('/Register-vehicle');
        })
     }




    return(
        <div className="box">
            <header><span>RENTALZ</span><div><Link className="link" to="/">Home</Link><Link className="link" to="/Login">I already have an account</Link></div></header>
        <div className="formcont">
            <div className="form"><span>Create account</span>
            <div><span>First Name<br></br><input value={firstname} onChange={e => setFirstName(e.target.value) } ></input ></span><span>Last Name<br></br><input value={lastname} onChange={e => setLastName(e.target.value) }></input></span></div>
            <div><span>Email<br></br><input value={email} onChange={e => setEmail(e.target.value) } ></input></span><span>Username<br></br><input value={username} onChange={e => setUsername(e.target.value) }></input></span></div>
            <div><span>Password<br></br><input type='password' value={password} onChange={e => setPassword(e.target.value) }></input></span><span>Confirm Password<br></br><input type="password" value={verify} onChange={e => setVerify(e.target.value) }></input></span></div>
            </div>
            <div className="spacer"><button onClick={register}>Create Account</button></div>

        </div>
        </div>
    )
    
}
export default Buy;