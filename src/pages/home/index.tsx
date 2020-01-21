import React, { useEffect, FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/barberShopAactions';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { Rating } from 'react-native-elements';
import { BarberShop } from '../../types/barberShop';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Home: FC<Props> = (props) => {

    const dispatch = useDispatch();

    const topBarberShops: BarberShop[] = useSelector((state: any) =>
        state.barberShop.topBarberShops);

    useEffect(() => {
        dispatch(actions.getTopBarberShopsAction());
    }, []);


    const carousel = ({ item }: { item: BarberShop }) => {

        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('BarberShopDetails', {
                barberShop: item
            })} >
                <View style={styles.card}>
                    <Image style={styles.imageCarousel} source={{ uri: 'data:image/jpg;base64,' + item.imagePath }} />
                    <View style={styles.bodyCard}>

                        <Text style={styles.titleCard}>{item.name}</Text>
                        <Text style={styles.text}>{item.address}</Text>
                        <Text style={styles.text}>{item.city}</Text>
                        {/* <Text style={styles.text}>{item.closed ? 'Aberto' : 'fechado'}</Text> */}
                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={item.rating}
                            style={styles.rating}
                        />
                    </View>
                </View>
            </TouchableOpacity >

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
                itemWidth={320}
            />
        </View>

    )
}

export default Home;