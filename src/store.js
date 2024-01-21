import { combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/account.slice';
import customerReducer from './features/customers/customer.slice';

const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });

const store = createStore(rootReducer);

export default store;
