import axios from 'axios';

let GET_PAGE = 'GET_PAGE';
let GET_BY_ID = 'GET_BY_ID';
let GET_ALL = 'GET_ALL'
let GET_BY_NAME = 'GET_BY_NAME'
let POST_ACTIVITY =  "POST_ACTIVITY"


export let getAll = () => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/api/countries?page=all")
        dispatch({ type: GET_ALL, payload: response.data })
    }
}

export let getPage = (sort) => {
 return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/api/countries?sort=" + sort)
        dispatch({ type: GET_PAGE, payload: response.data })
    }
}
export let getByName = (name, activity) => {
    return async (dispatch) => {

        let response = await axios.get("http://localhost:3001/api/countries?page=all")
        if (name) {
            response = await axios.get("http://localhost:3001/api/countries?name=" + name)
        }
        
        if (activity) {
            response.data = response.data.filter(data => data.Activities.filter(a => a.name === activity).length)
        }
        dispatch({ type: GET_BY_NAME, payload: response.data })
    }
}

// export let getByActivity = (activity) => {
//     return async (dispatch) => {
//         let response = await axios.get("http://localhost:3001/api/countries?page=all")
//         response = await axios.get("http://localhost:3001/api/countries?activity=" + activity)
//         dispatch({ type: GET_BY_ACTIVITY, payload: response.data })
//     }
// }


export let getById = (id) => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/api/countries/" + id)
        dispatch({ type: GET_BY_ID, payload: response.data })
    }

}

