import { createStackNavigator } from 'react-navigation-stack';
import Home from '../pages/home';
import BarberShopDetails from '../pages/barberShop/barberShopDetails';
import { createAppContainer } from 'react-navigation';

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
    }
},
    {
        initialRouteName: 'Home'
    });


export default createAppContainer(StackRoutes);