import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';


const TabBar = (props: { onTabPress: any; getAccessibilityLabel: any; navigation: any; }) => {
    const {
        onTabPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes } = navigation.state;
    return (
        <View style={styles.container}>
            {routes.map((route, index) => {
                return <View key={index} style={styles.container}>

                </View>
            })}
        </View>
    );
};

export default TabBar;