import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import barberShop from '../reducers/barberShop/index';
import barber from '../reducers/barber/index';


const reducers = combineReducers({
    barberShop,
    barber
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;