import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import accountReducer from './features/accounts/account.slice';
import customerReducer from './features/customers/customer.slice';

const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
