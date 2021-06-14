import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import Cards from '../components/Cards/Cards';
import { getByName } from '../actions/actions';
import { getPage } from '../actions/actions';
import './Order.css'



const Order = () => {

    let { page: InitialPage, sort: srt } = useParams()

    InitialPage = 1;

    let [page, setPage] = useState(parseInt(InitialPage))

    let [sort, setSort] = useState(`${srt}`)

    const dispatch = useDispatch()

    let lastPage = 25;

    let countries = useSelector(state => state.countries)
    var act = [];

    countries.map(data => data.Activities.length && data.Activities.map(activity => activity.name && act.push(activity.name)));

    var uniqs = act.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      })
     console.log(uniqs);


    const [filter, setFilter] = useState({ name: "", activity: ""});


    useEffect(() => {
        dispatch(getPage(page, sort))
    }, [dispatch, page, sort]);
    useEffect(() => {
        dispatch(getByName(filter.name, filter.activity))
    }, [dispatch, filter])


    function nextPage(e) {

        e.preventDefault();
        

        if (page < lastPage) {
            document.getElementById("prev").disabled = false;
            setPage(page + 1)
        } else {
            document.getElementById("next").disabled = true;
        }
    }

    function prevPage(e) {
        e.preventDefault();

        if (page > 1) {
            document.getElementById("next").disabled = false;
            setPage(page - 1)
        } else {
            document.getElementById("prev").disabled = true;
        }
    }
    function changeSort(e) {
        setSort(e.target.value)
    } 

    return (
        <div>
            <div className="Display-Filters">
                        <div className="Paginado">
                            <button  id="prev" onClick={(e) => prevPage(e)}>{` < `}</button>
                                            <span> {page}  </span>
                            <button id="next" onClick={(e) => nextPage(e)}>{` > `}</button>
                        </div>






                    <div className="Order">

                            {/* ORDERNADO POR NOMBRE O POBLACION */}

                        <select  onChange={(e) => changeSort(e)}>
                            <option value= ""> Order By</option>
                            <option value="AtoZ">A to Z</option>
                            <option value="ZtoA">Z to A</option>
                            <option value="pobAsc">Ascending Population</option>
                            <option value="pobDes">Descending Population</option>
                        </select>

                            {/* ORDENADO POR REGIONES */}

                        <select  onChange={(e) => changeSort(e)}>
                            <option value="">All Regions</option>
                            <option value="Europe">Europe</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Polar">Polar</option>
                         </select>

                                {/* FILTRADO POR ACTIVIDAD */}

                         <select  onChange={(e) => setFilter({...filter, activity: e.target.value })}>
                                <option value="">All</option>
                                {uniqs.map((item, i) => <option key={i} value={item}>{item}</option>)}
                         </select>   
                    </div>

                    <div className="Finder">
                                <input  
                                    placeholder="Find Country"
                                    onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                                    value={filter.name}
                                />
                       

                     </div>
                </div>
        
            <Cards countries={countries} />
            
    </div>
    )
}

export default Order