import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import barberShop from '../reducers/barberShop/index';
import barber from '../reducers/barber/index';
import account from '../reducers/account/index';


const reducers = combineReducers({
    barberShop,
    barber,
    account
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;