import { combineReducers } from 'redux';
import OrdersReducer from './orders-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    ordersStore: OrdersReducer,
    form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;