import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import barberShop from '../reducers/barberShop/index';
import { Reducer } from 'react';


const reducers = combineReducers({
    barberShop
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;