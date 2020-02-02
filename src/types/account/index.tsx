export const FETCH_LOGIN = 'FETCH_LOGIN';

export interface Login {
    email: string;
    password: string;
}

export interface AccountState {
    objectLogin: {},
}

export interface FetchLogin {
    type: typeof FETCH_LOGIN,
    payload: {}
}


export type AccountActions = FetchLogin;