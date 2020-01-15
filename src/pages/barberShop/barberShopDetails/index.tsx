import React, { FC } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { BarberShop } from '../../../types/barberShop';
import styles from './styles';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


const BarberShopDetails: FC<Props> = (props) => {

    const objectBarberShop: NavigationParams | any = props.navigation.state.params;
    return (

        <View style={styles.containerBody}>
            <Image style={styles.image} source={{ uri: 'data:image/jpg;base64,' + objectBarberShop.barberShop.imagePath }} />
        </View>

    )
}

export default BarberShopDetails;