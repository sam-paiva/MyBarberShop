import React, { useEffect, FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/barberShopAactions';
import { NavigationScreenProp, NavigationState, NavigationParams, NavigationActions } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import { Rating } from 'react-native-elements';
import { BarberShop } from '../../types/barberShop';
import { onSignOut, isSignedIn } from '../../service/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Item } from 'native-base';
import MyTabs from '../../components/bottomBar';


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Home: FC<Props> = (props) => {

    const dispatch = useDispatch();

    const topBarberShops: BarberShop[] = useSelector((state: any) =>
        state.barberShop.topBarberShops);

    useEffect(() => {
        dispatch(actions.getTopBarberShopsAction());
        isSignedIn() ? null : props.navigation.navigate('Login');;
    }, []);


    function logout() {
        onSignOut();

        props.navigation.navigate('Login');
    }

    const carousel = ({ item }: { item: BarberShop }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('BarberShopDetails', {
                barberShop: item
            })} >
                <View style={styles.card}>
                    <Image style={styles.imageCarousel} source={{ uri: 'data:image/jpg;base64,' + item.imageName }} />
                    <View style={styles.bodyCard}>
                        <Text numberOfLines={1} style={styles.titleCard}>{item.name}</Text>
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
            <Item style={styles.item} onPress={() => logout()}>
                <Icon name={'keyboard-backspace'} size={30} color={'black'} />
                <Text>Sair</Text>
            </Item>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titleText}>Top Barbearias</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('BarberShopIndex')}>
                    <Text style={{
                        padding: 30,
                        fontSize: 17,
                    }}>Ver todas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyCard}>
                <Carousel
                    layout={'default'}
                    data={topBarberShops}
                    renderItem={carousel}
                    sliderWidth={500}
                    itemWidth={250}
                />
            </View>
        </View >

    )
}

export default Home;