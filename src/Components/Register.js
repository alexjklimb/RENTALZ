import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Register(props){


function logout(){
        axios.get('/auth/logout')
        .then(res => {
        }).catch(err => console.log(err))
    }



    return(
        <div className="box">
            <header className="header"><span>RENTALZ</span><div><Link className="link" to="/" onClick={logout}>Logout <br></br>First Last</Link></div></header>
        <div className="formcont">
            <div className="forms"><span>My Vehicle</span>
            <div><span>Type (car,boat,trailer,etc..)<br></br><input></input></span><span>Image Url<br></br><input></input></span><span>Make<br></br><input></input></span></div>
            <div><span>Model<br></br><input></input></span><span>Year<br></br><input></input></span><span>Price<br></br><input></input></span></div>
            <div><span>Description<br></br><textarea></textarea></span></div>
            <div className="spacer"><button>Register Vehicle</button></div>
            </div>
        </div>
        <div className="vehicles">
            <button></button>
            <div className="vehicle">
            </div>
            <button></button>
        </div>
        </div>
    )
}
export default Register;