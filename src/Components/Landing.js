import React from 'react'
import {Link} from 'react-router-dom'
function Landing(){
    return(
        <div className="landing">
            <div className="gradient">
            <header>
                <span>RENTALZ</span>
                <Link className="button" to="/Login">Have an account? Login here</Link>
            </header>
            <div className="cont">
                <div className="buttons">
                <span><Link to ="/register-to-buy" className='button' >Register to buy</Link></span>
                <span><Link to ="/register-to-sell" className='button'>Register to sell</Link></span>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Landing;