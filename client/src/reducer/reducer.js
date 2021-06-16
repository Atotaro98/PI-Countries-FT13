let initialState = {
  countries: [],
  countriesAct:[],
  country: []
};

const Actions = (state = initialState, action) => {

  switch (action.type) {
    case "GET_PAGE":
      return {
        ...state,
        countries: action.payload,
      }
    case "GET_BY_ID":
      return {
        ...state,
        country: action.payload
      }
    case "GET_BY_NAME":
      return {
        ...state,
        countries: action.payload
      }

      case "GET_ALL":
      return {
        ...state,
        countries: action.payload
      }

      case "GET_BY_ACTIVITY":
      return {
        ...state,
        countriesAct: action.payload
      }
    
    default:
      return state;
  }
}

export default Actions;
