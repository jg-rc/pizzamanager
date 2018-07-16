import { client } from './';

const url = '/pizza-orders';

// fetch orders and then dispatch the action 'FETCH_ORDERS'
export function fetchOrders(){
    return dispatch => {
      client.get(url).then(((response)=>dispatch({
        type: 'FETCH_ORDERS',
        payload: response
      })))
  }
}