const defaultState = {
    orders: []
  }
  
  export default (state=defaultState, action={}) => {
    switch (action.type) {
      case 'FETCH_ORDERS': {
        return {
          ...state,
          orders: action.payload.data.data || action.payload.data // in case pagination is disabled
        }
      }
      default:
        return state;
    }
  }