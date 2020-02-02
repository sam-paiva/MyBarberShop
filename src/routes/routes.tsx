import { createStackNavigator } from 'react-navigation-stack';
import Home from '../pages/home';
import BarberShopDetails from '../pages/barberShop/barberShopDetails';
import { createAppContainer } from 'react-navigation';
import BarberShopIndex from '../pages/barberShop/barberShopIndex';
import Login from '../pages/account/login';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBar from '../components/bottomBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { isSignedIn } from '../service/auth';

const SignedIn = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    BarberShopDetails: {
        screen: BarberShopDetails,
        navigationOptions: {
            headerShown: false
        }
    },
    BarberShopIndex: {
        screen: BarberShopIndex,
        navigationOptions: {
            headerTitle: ''
        }
    },
});

const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    },
});

export const createRootNavigator = (signedIn: boolean = false) => {
    return createStackNavigator({
        SignedIn: { screen: SignedIn },
        SignedOut: { screen: SignedOut, }
    }, {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut",
        navigationOptions: {
            gestureEnabled: false,
        }
    });
}


const App = createBottomTabNavigator(
    {
        SignIn: {
            screen: SignedIn
        },
        SignedOut: {
            screen: SignedOut,
            navigationOptions: {
                tabBarVisible: false,
            }
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName: string;
                if (routeName === 'Home') {
                    iconName = 'home';
                    <Icon name={iconName} size={25} color={tintColor} />;
                }
            },
        }),
        tabBarComponent: TabBar,
        tabBarOptions: {
            activeTintColor: '#42f44b',
            inactiveTintColor: 'green',
        },
        initialRouteName: 'SignedOut',
    }
);


export default createAppContainer(App);