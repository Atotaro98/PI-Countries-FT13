import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css'



const LandingPage = () => {
    return (
        <div  className="Box-LandingPage">
            <div className="LandingPage">
                <div className="Margin-LandingPage">
                <h1 className="Title-LandingPage">Welcome To Countries</h1>
                <p className="Info-LandingPage">Here you can Search any Country and Add Activities him.</p>
                </div>
            <Link to="/home">
                <div className="Div-Button-LandingPage">
                    <button className="Button-LandingPage">Enter</button>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default LandingPage