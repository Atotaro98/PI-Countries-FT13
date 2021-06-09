import React, { useState, useEffect, Fragment } from "react";
import Card from "../Card/Card";
import { Link, useParams } from 'react-router-dom'
import {getAllByOrder} from '../../actions/actions'
import { useDispatch } from "react-redux";
import './Cards.css'

export default function Cards({countries}) {
  

  const [actualCountries, setActualCountries] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [order, setOrder] = useState();

  const dispatch = useDispatch();
  
  const countriesForPage = 10;
  const numberOfPages = Math.ceil(countries.length / countriesForPage);

 
  const paginado = (pageNumber) => {
    const aux =
      pageNumber === 0 ? pageNumber + 1 * countriesForPage : pageNumber * countriesForPage + 1;
      setActualCountries(countries.slice(aux - countriesForPage, aux)); 

    setActualPage(pageNumber);
  };

  useEffect(() => {
    paginado(0);
  }, [countries]); 

  useEffect(() => {
    dispatch(getAllByOrder(order))
}, [order]);


  function changeSort(e) {
    setOrder(e.target.value)
}

  return (
    <Fragment>
      <div>
        <button onClick={() => paginado(actualPage >= 1 ? actualPage - 1 : actualPage) } >{` < `}</button>
        <span>{actualPage}</span>
        <button onClick={() => paginado(actualPage < numberOfPages ? actualPage + 1 : actualPage) } >{` > `}</button>
        <span>Order:</span>
        <select  onChange={(e) => changeSort(e)}>
                        <option value="all">Default</option>
                        <option value="AtoZ">A to Z</option>
                        <option value="ZtoA">Z to A</option>
                        <option value="pobAsc">Ascending Population</option>
                        <option value="pobDes">Descending Population</option> 
                    </select>
      </div>
      <div className="cards">
        {actualCountries &&
          actualCountries.map((c) => (
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
    </Fragment>
  );
}

