import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import Cards from '../components/Cards/Cards';
import { getByName } from '../actions/actions';
import { getPage } from '../actions/actions';
import './Order.css'



const Order = () => {

    let { page: InitialPage, sort: srt } = useParams()

    let countries = useSelector(state => state.countries)
    var act = [];

    InitialPage = 1;


    console.log("Countries-Length", countries.length)
        

    let [page, setPage] = useState(parseInt(InitialPage))

    let [sort, setSort] = useState(`${srt}`)

    const dispatch = useDispatch()

    

    

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

        
        

        if (countries.length === 10) {
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
                        

                        {/* BUSQUEDA POR NOMBRE */}

                    <div className="Finder-By-Name">
                                        <input  
                                            placeholder="Find Country"
                                            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                                            value={filter.name}
                                            class="form-control"
                                        />
                            

                            </div>


                            {/* FILTRADO POR ACTIVIDAD */}


                            <div className="Order-By-Activity">
                         <select  onChange={(e) => setFilter({...filter, activity: e.target.value })}>
                                <option value="">All Activities</option>
                                {uniqs.map((item, i) => <option key={i} value={item}>{item}</option>)}
                         </select>  
                                </div> 



                    

                            <div className="Paginado">
                                    <button  id="prev" onClick={(e) => prevPage(e)}>{` < `}</button>
                                                    <span> {page}  </span>
                                    <button id="next" onClick={(e) => nextPage(e)}>{` > `}</button>
                                </div>

                    


                            {/* ORDENADO POR REGIONES */}

                            <div className="Order-By-Region">

                        <select  onChange={(e) => changeSort(e)}>
                            <option value="">All Regions</option>
                            <option value="Europe">Europe</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Polar">Polar</option>
                         </select>
                            </div> 
                     

                            {/* ORDERNADO POR NOMBRE O POBLACION */}

                                <div className="Order-By-Name">
                        <select  onChange={(e) => changeSort(e)}>
                            <option value= ""> Order By</option>
                            <option value="AtoZ">A to Z</option>
                            <option value="ZtoA">Z to A</option>
                            <option value="pobAsc">Ascending Population</option>
                            <option value="pobDes">Descending Population</option>
                        </select>
                                </div>
                          
                                


                                  


                    


                </div>
        
            <Cards countries={countries} />
    </div>
    )
}

export default Order
