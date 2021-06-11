import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Cards.css';
const Cards = ({countries}) => {
    

    return (
        <div className="cards">
        {countries &&
          countries.map((c) => (
            <div>
              
              <Link style={{textDecoration: 'none' }} to={`/country/${c.alpha3Code}`} key={`link_${c.alpha3Code}`}>
                    <Card
                        name={c.name}
                        flag={c.flag}
                        region={c.region}
                        key={c.alpha3Code}
                    />
                </Link>
                
            </div>
            
          ))}
      </div>
    )
}

export default Cards
