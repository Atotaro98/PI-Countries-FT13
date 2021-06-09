import React, { useEffect, useState } from "react";
import { getAll } from "../../actions/actions";
import { getByName } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../Cards/Cards";

export default function Home() {

  const [name, setName] = useState('')

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  



  useEffect(() => {dispatch(getAll());}, []);

  useEffect(() => {dispatch(getByName(name))}, [name]);


  function handleChange (e){
    setName(e.target.value)
   }

  return (
    <div>
      <form onChange={(e) => handleChange(e)}>
      <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    
                  /> 
      </form>
      <Cards countries={countries} />
    </div>
  );
}

