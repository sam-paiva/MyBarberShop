import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../../pages/home";
import BarberShopIndex from "../../pages/barberShop/barberShopIndex";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={20} />
                ),
            }} />
            <Tab.Screen name="Lista de Barbearias" component={BarberShopIndex} options={{
                tabBarLabel: 'Lista de Barbearias',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="list" color={color} size={20} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default MyTabs;