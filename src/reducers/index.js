import { combineReducers } from 'redux';
import OrdersReducer from './orders-reducer';

const reducers = {
  ordersStore: OrdersReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;