export const FETCH_LOGIN = 'FETCH_LOGIN';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export interface Login {
    email: string;
    password: string;
}

export interface User {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export interface AccountState {
    objectLogin: {},
}

export interface FetchLogin {
    type: typeof FETCH_LOGIN,
    payload: {}
}

export interface CreateAccount {
    type: typeof CREATE_ACCOUNT,
    payload: void
}


export type AccountActions = FetchLogin | CreateAccount;