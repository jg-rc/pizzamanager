const defaultState = {
    orders: [],
    order: {},
    loading: false,
    errors: {}
  }
  
  export default (state=defaultState, action={}) => {
    switch (action.type) {
        case 'FETCH_ORDERS': {
            return {
            ...state,
            orders: action.payload.data.data || action.payload.data // in case pagination is disabled
            }
        }
        case 'NEW_CONTACT': {
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
        case 'SAVE_ORDER_REJECTED': {
            const data = action.payload.response.data;
            // convert feathers error formatting to match client-side error formatting
            const { nombre , direccion, pizza, telefono, sabor } = data.errors;
            const errors = { global: data.message, nombre, direccion, pizza, telefono,sabor };
            return {
              ...state,
              errors: errors,
              loading: false
            }
          }
      default:
        return state;
    }
  }