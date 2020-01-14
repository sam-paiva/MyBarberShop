import React, { useEffect, FC } from 'react';
import { View, Text, Image, NativeMethodsMixin } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import * as actions from '../../actions/barberShopAactions';
import { BarberShopState, BarberShop } from '../../types/barberShop';
import Carousel from 'react-native-snap-carousel';


const Home: FC = () => {

    const dispatch = useDispatch();

    const topBarberShops: BarberShop[] = useSelector((state: any) =>
        state.barberShop.topBarberShops);

    useEffect(() => {
        dispatch(actions.getTopBarberShopsAction());
    }, []);

    const carousel = ({ item, index }) => {
        let image = item.imagePath
        return (

            <View style={styles.card}>
                <Image style={styles.imageCarousel} source={{ uri: 'data:image/jpg;base64,' + item.imagePath }} />
                <View style={styles.bodyCard}>
                    <Text style={styles.titleCard}>{item.name}</Text>
                    <Text style={styles.text}>{item.address}</Text>
                    <Text style={styles.text}>{item.city}</Text>
                    <Text style={styles.text}>{item.closed ? 'Aberto' : 'fechado'}</Text>
                </View>
            </View>
        )
    }

    return (

        <View style={styles.containerBody}>
            <Image style={styles.image} source={require('../../assets/background.jpg')} />
            <Text style={styles.titleText}>Top Barbearias</Text>

            <Carousel
                layout={'default'}
                data={topBarberShops}
                renderItem={carousel}
                sliderWidth={500}
                itemWidth={300}
            />

        </View>

    )
}

export default Home;