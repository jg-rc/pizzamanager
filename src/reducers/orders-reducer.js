const defaultState = {
    orders: [],
    order: {},
    total:0,
    loading: false,
    errors: {}
  }
  
  export default (state=defaultState, action={}) => {
    switch (action.type) {
      case 'FETCH_ORDERS': {
            return {
              ...state,
              total: action.payload.data.total, // needed for pagination
              orders: action.payload.data.data || action.payload.data // in case pagination is disabled
            }
        }
        case 'NEW_ORDER': {
            return {
                ...state,
                order: {}
            }
        }
        case 'SAVE_ORDER_PENDING': {
            return {
              ...state,
              loading: true
            }
        }
        case 'SAVE_ORDER_FULFILLED': {
            return {
              ...state,
              orders: [...state.orders, action.payload.data],
              errors: {},
              loading: false
            }
        }
        case 'FETCH_ORDER_PENDING': {
            return {
              ...state,
              loading: true,
              order: {}
            }
          }
          
          case 'FETCH_ORDER_FULFILLED': {
            return {
              ...state,
              order: action.payload.data,
              errors: {},
              loading: false
            }
          }
          
          case 'UPDATE_ORDER_PENDING': {
            return {
              ...state,
              loading: true
            }
          }
          
          case 'UPDATE_ORDER_FULFILLED': {
            const order = action.payload.data;
            return {
              ...state,
              orders: state.orders.map(item => item._id === order._id ? order : item),
              errors: {},
              loading: false
            }
          }
          case 'DELETE_ORDER_FULFILLED': {
            const _id = action.payload.data._id;
            return {
              ...state,
              orders: state.orders.filter(item => item._id !== _id)
            }
          }
      default:
        return state;
    }
  }