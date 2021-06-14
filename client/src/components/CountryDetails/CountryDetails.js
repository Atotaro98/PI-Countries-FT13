import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../actions/actions';
import  ReturnImg  from './return.svg'
import './CountryDetails.css'




const CountrDetails = () => {
    let { id:code } = useParams()
    let[id]=useState(code)
    const dispatch = useDispatch()
    const country= useSelector(state => state.country);
    let { flag, name, alpha3Code, region, capital, subregion, area, population, Activities } = country
    useEffect(() => { dispatch(getById(id)) }, [dispatch, id]);

    // function formatNumber(num) {
    //     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    //   }
    return (
        
       <div className="Details-Content">
        <div className="card-Details">
            <div className="Return-Icon">
        <a href="javascript: history.go(-1)"><img src={ReturnImg}></img></a>
            </div>
            <div className="imgContainer-Details">
                <img className="img-Details" src={flag} alt="flag" />
            </div>
            <div className="container-Details">

                <h1>Name: {name}</h1>
                <p>Country code: {alpha3Code}</p>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subregion}</p>
                <p>Area: {area} Km2</p>
                <p>Population: {population}</p>
                {/* <p>Population: {formatNumber(population)}</p> */}
                <span>
                <h3>Activities:</h3>
                <p>
                    {Activities&&Activities.length ?
                    Activities.map(a=>
                    <p> Name: {a.name}      
                        <p>Duration: {a.duration} Days  </p>   
                        <p>Difficulty: {a.difficulty} </p>   
                        <p>Season: {a.season}</p>  
                        
                    </p>) 
                     : <p>No activities yet</p>}   
                </p>
            </span>
            </div>
            </div>

           

        </div>

    )
}

export default CountrDetails;
