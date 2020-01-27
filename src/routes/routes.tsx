import { createStackNavigator } from 'react-navigation-stack';
import Home from '../pages/home';
import BarberShopDetails from '../pages/barberShop/barberShopDetails';
import { createAppContainer } from 'react-navigation';
import BarberShopIndex from '../pages/barberShop/barberShopIndex';
import Login from '../pages/account/login';

const StackRoutes = createStackNavigator({
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
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    }
},
    {
        initialRouteName: 'Login'
    });


export default createAppContainer(StackRoutes);