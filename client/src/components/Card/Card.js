import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="imgContainer">
                <img className="img" src={props.flag} alt="flag" />
            </div>
            <div className="container" >
                <h4>Country Name : {props.name}</h4>
                <p>Region : {props.region}</p>
            </div>
        </div>
    )
}

export default Card
