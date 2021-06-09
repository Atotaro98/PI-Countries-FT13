import React, { useEffect } from "react";
import { getAll } from "../../actions/actions";
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../Cards/Cards";

export default function Home() {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      
      <Cards countries={countries} />
    </div>
  );
}

