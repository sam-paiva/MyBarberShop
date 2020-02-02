import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@BarberShop:token";

export const onSignIn = (token: string) => AsyncStorage.setItem(TOKEN_KEY, token);

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = () => {
    const token = AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null) ? true : false;
};