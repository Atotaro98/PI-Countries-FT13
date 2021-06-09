import  {GET_ALL, GET_BY_ID, GET_BY_NAME, GET_ALL_BY_ORDER} from '../actions/actions'


let initialState = {
    countries: [],
    countriesPage: [],
    country: [],
  };


  function rootReducer(state = initialState, action) {
 
    if (action.type === GET_ALL) {
      return {
        ...state,
        countries: action.payload
      }
    }
    if (action.type === GET_ALL_BY_ORDER) {
      return {
        ...state,
        countries: action.payload
      }
    }
    if (action.type === GET_BY_NAME) {
      return {
        ...state,
        countriesPage: action.payload
      };
    }

    if (action.type === GET_BY_ID) {
      return {
        ...state,
        country: action.payload
      }
    }
    return state;
  }
  
  export default rootReducer;  
  
 
  