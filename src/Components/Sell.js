import React from 'react';
import {Link} from 'react-router-dom';
function Sell(){
    return(
        <div className="box">
            <header><span>RENTALZ</span><div><Link className="link" to="/">Home</Link><Link className="link" to="/Login">I already have an account</Link></div></header>
        <div className="formcont">
            <div className="form"><span>Create account</span>
            <div><span>First Name<br></br><input></input></span><span>Last Name<br></br><input></input></span></div>
            <div><span>Email<br></br><input></input></span><span>Username<br></br><input></input></span></div>
            <div><span>Password<br></br><input></input></span><span>Confirm Password<br></br><input></input></span></div>
            </div>
            <div className="spacer"><button>Create Account</button></div>

        </div>
        </div>
    )
}
export default Sell;