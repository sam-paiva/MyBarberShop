import React, { FC, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Item, Input, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { BarberShop } from '../../../types/barberShop';
import * as actions from '../../../actions/barberShopAactions';
import Carousel from 'react-native-snap-carousel';
import { Rating } from 'react-native-elements';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const BarberShopIndex: FC<Props> = (props) => {

    const dispatch = useDispatch();
    const allBarberShops: BarberShop[] = useSelector((state: any) => state.barberShop.allBarberShops);

    useEffect(() => {
        dispatch(actions.getAllBarberShopsAction());
    }, []);

    const carousel = ({ item }: { item: BarberShop }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('BarberShopDetails', {
                barberShop: item
            })} >
                <View style={styles.card}>
                    <Image style={styles.imageCarousel} source={{ uri: 'data:image/jpg;base64,' + item.imagePath }} />
                    <View style={styles.bodyCard}>

                        <Text numberOfLines={1} style={styles.titleCard}>{item.name}</Text>
                        <Text style={styles.text}>{item.address}</Text>
                        <Text style={styles.text}>{item.city}</Text>
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
            <Item>
                <Icon size={30} name="search" color={'black'} />
                <Input placeholder='Pesquise Aqui uma barbearia' placeholderTextColor={'grey'} />
            </Item>
            <View style={styles.bodyCard}>
                <Carousel
                    layout={'default'}
                    vertical={true}
                    data={allBarberShops}
                    renderItem={carousel}
                    sliderWidth={500}
                    itemWidth={320}
                    itemHeight={270}
                    sliderHeight={200}
                />
            </View>
        </View>
    )
}


export default BarberShopIndex;