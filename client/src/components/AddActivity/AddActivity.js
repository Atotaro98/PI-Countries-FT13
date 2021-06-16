import React from 'react'
import { useEffect, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getAll} from '../../actions/actions'
import './AddActivity.css'




const AddActivity = () => {
    const[Alert, setAlert] = useState("")
    const[InputActivity, setInputActivity] = useState(
        {
            name:'',
            difficulty:'',
            duration:'',
            season:'',
        }

    )
    let countries= useSelector(state => state.countries)
    // console.log("Countries:", countries)
    let dispatch = useDispatch()
    const[InputCountries, setInputCountries] = useState([])

    function handlerOnChange (e){
        setInputActivity({
            ...InputActivity,
            [e.target.name]:e.target.value
        })
    }
    useEffect(() => {
        dispatch(getAll())
    },[]);

    async function handlerSubmit(e){
        e.preventDefault()
        let i = InputCountries.map(e => e.id)
        let sen = [InputActivity,i]
        console.log("HOLA SEN",sen)
        let al = await axios.post("http://localhost:3001/api/activity", sen)
        console.log("HOLA AL",al.data.map(e => e.name),InputCountries.map(e => e.name))
        // setAlert(al.data)
        alert("ACTIVIDAD CREADA")

        setInputActivity({
            name:'',
            difficulty:'',
            duration:'',
            season:'',
        })
        
        setInputCountries([])
    }

    function handlerOnChangeP(e){
        let aux = e.target.value.split(' ')
        // console.log("Soy Aux",aux)
        setInputCountries([
            ...InputCountries,{id:aux[0],name:aux[1]}
        ])

    
    }
    // console.log(InputActivity)
   console.log("Soy Input Countries",InputCountries)
    return(
        <div className="formulario">
            <div>
                <form onSubmit={handlerSubmit}>
                <label>Name</label>
                <input name='name' value={InputActivity.name} onChange={handlerOnChange} required/>

                <label>Duration</label>
                <input name='duration' type="number" min="1" max="365" value={InputActivity.duration} onChange={handlerOnChange} required/>

                <label>Dificulty</label>
                <select name="difficulty" id="difficulty1" onChange={handlerOnChange} value={InputActivity.difficulty} required>
                <option selected value={''}></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </select>



                <label>Season</label>
                <select name="season" id="season1" onChange={handlerOnChange} value={InputActivity.season}>
                <option selected value={''}></option>
                <option value={'Winter'}>Winter</option>
                <option value={'Autumn'}>Autumn</option>
                <option value={'Spring'}>Spring</option>
                <option value={'Summer'}>Summer</option>
                </select>


                <label>Select Country</label>
                <select name="Country" id="Country1" onChange={handlerOnChangeP} value={InputCountries}>
                <option selected value={''}></option>
                {countries && countries.map(el=>(<option value={el.alpha3Code+' '+el.name}>{el.name}</option>))}
                </select>
                <button type='submit'>Create</button>



                

                </form>

                





            </div>




                <ul>
                   
                   {InputCountries ? InputCountries.map((el) => (
                   <p key={el.alpha3Code}>  {el.name}<button onClick={() => setInputCountries(InputCountries.filter(e => e.name !== e.name))}>X</button> </p>)) :null}
                   
               </ul>



               <h1>{Alert}</h1>


        </div>
    )
    
}

export default AddActivity;
