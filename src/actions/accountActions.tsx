import * as types from '../types/account/index';
import * as service from '../service/service';
import { showToast } from '../utils/utils';
import { Login } from '../types/account';
import { onSignIn } from '../service/auth';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';


export function loginAction(login: Login, navigation: NavigationScreenProp<NavigationState, NavigationParams>) {
    return (dispatch: (arg0: { type: string; payload: types.Login[]; }) => void) => {
        try {
            const response = service.login(login);

            response.then(res => {
                onSignIn(res.data.accessToken);
                navigation.navigate('Home');
                dispatch({ type: types.FETCH_LOGIN, payload: res.data })
            })
        } catch (error) {

        }
    }
}

export function createAccountAction(user: types.User, navigation: NavigationScreenProp<NavigationState, NavigationParams>) {
    return (dispatch: (arg0: { type: string; payload: void; }) => void) => {
        try {
            const response = service.createAccount(user);

            response.then(res => {
                if (res.status === 200) {
                    showToast('Sucesso ao criar sua conta', 'green');
                    navigation.navigate('Login');
                    dispatch({ type: types.CREATE_ACCOUNT, payload: res.data })
                }
                else {
                    return;
                }
            })
        } catch (error) {

        }
    }
}