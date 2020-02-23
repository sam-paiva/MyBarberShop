import * as types from '../../types/account/index';

const initialState: types.AccountState = {
    objectLogin: {},
}


export default function accountReducer(state = initialState, action: types.AccountActions): types.AccountState {
    switch (action.type) {
        case types.FETCH_LOGIN:
            state.objectLogin = action.payload;
            return Object.assign({}, state);
        case types.CREATE_ACCOUNT:
            return Object.assign({}, state);
        default:
            return state;
    }
}


