import { client } from './';

const url = '/pizza-orders';

// fetch orders and then dispatch the action 'FETCH_ORDERS'
export function fetchOrders({ pageSize, activePage }) {
  let pagination = `?$limit=${pageSize}&$skip=${pageSize*(activePage-1)}`
    return dispatch => {
      client.get(`${url}${pagination}`).then(((response)=>dispatch({
        type: 'FETCH_ORDERS',
        payload: response
      })))
  }
}

export function newOrder() {
    return dispatch => {
      dispatch({
        type: 'NEW_ORDER'
      })
    }
  }
  
  export function saveOrder(order) {
    return dispatch => {
      return dispatch({
        type: 'SAVE_ORDER',
        payload: client.post(url, order)
      })
    }
  }

  export function fetchOrder(_id) {
    return dispatch => {
      return dispatch({
        type: 'FETCH_ORDER',
        payload: client.get(`${url}/${_id}`)
      })
    }
  }
  
  export function updateOrder(order) {
    return dispatch => {
      return dispatch({
        type: 'UPDATE_ORDER',
        payload: client.put(`${url}/${order._id}`, order)
      })
    }
  }

  export function deleteOrders(_id) {
    return dispatch => {
      return dispatch({
        type: 'DELETE_ORDER',
        payload: client.delete(`${url}/${_id}`)
      })
    }
  }