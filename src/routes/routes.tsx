import React, { ComponentType } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/account/login';
import CreateAccount from '../pages/account/createAccount';
import Home from '../pages/home';
import { NavigationScreenProp, NavigationState, NavigationParams, NavigationActions } from 'react-navigation';
import BarberShopDetails from '../pages/barberShop/barberShopDetails';
import BarberShopIndex from '../pages/barberShop/barberShopIndex';
import { isSignedIn } from '../service/auth';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '../components/bottomBar';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={MyTabs} options={({ navigation, route }) => ({
                    headerTitle: props => null,
                    headerShown: false
                })} />
                <Stack.Screen name="BarberShopDetails" component={BarberShopDetails} />
                <Stack.Screen name="BarberShopIndex" component={BarberShopIndex} options={{ headerShown: false }} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;