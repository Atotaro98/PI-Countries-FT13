import axios from 'axios';

export const GET_ALL = 'GET_ALL';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_ALL_BY_ORDER = 'GET_ALL_BY_ORDER';

export const getAll = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:3001/api/countries?page=all")
        dispatch({ type: GET_ALL, payload: response.data })
    }
}

export const getAllByOrder = (order) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/api/countries?page=${order}`)
        dispatch({ type: GET_ALL_BY_ORDER, payload: response.data })
    }
}


export const getByName =(name) => {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/api/countries?name=${name}`)
          dispatch({ type: GET_BY_NAME, payload: response.data });
    };
  }

  export const getById = (id) => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:3001/api/countries/" + id)
        dispatch({ type: GET_BY_ID, payload: response.data })
    }

}
