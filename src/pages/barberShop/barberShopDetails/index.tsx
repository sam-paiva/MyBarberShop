import React, { FC, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import * as actions from '../../../actions/barberActions';
import { Barber } from '../../../types/barber';
import { Rating } from 'react-native-elements';


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


const BarberShopDetails: FC<Props> = (props) => {

    const objectBarberShop: NavigationParams | any = props.navigation.state.params;
    const dispatch = useDispatch();
    const barbers: Barber[] = useSelector((state: any) =>
        state.barber.barbers);

    function makeAppointment(id: number, name: string) {
        Alert.alert('Confirma',
            'Tem certeza que deseja marcar horário com ' + name + '?', [
            {
                text: 'Ok',
                onPress: () => {
                    dispatch(actions.makeAppointmentAction(id));

                }
            },
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
        ]);

        dispatch(actions.getBarberFromBarberShopAction(objectBarberShop.barberShop.id));
    }

    useEffect(() => {
        dispatch(actions.getBarberFromBarberShopAction(objectBarberShop.barberShop.id));
    }, []);

    const carousel = ({ item }: { item: Barber }) => {
        return (
            <TouchableOpacity onPress={() => makeAppointment(item.id, item.name)} >
                <View style={styles.card}>
                    <Image style={styles.imageCarousel} source={{ uri: 'data:image/jpg;base64,' + item.photoPath }} />
                    <View style={styles.bodyCard}>
                        <Text style={styles.titleCard}>{item.name}</Text>
                        <Text style={styles.text}>{item.numberCell}</Text>
                        <Text style={styles.text}>{item.available ? 'Diponível' : 'Não disponível'}</Text>
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
            <Image style={styles.image} source={{ uri: 'data:image/jpg;base64,' + objectBarberShop.barberShop.imagePath }} />
            <View style={styles.bodyCard}>
                <Carousel
                    layout={'default'}
                    vertical={true}
                    data={barbers}
                    renderItem={carousel}
                    sliderWidth={500}
                    itemWidth={320}
                    itemHeight={320}
                    sliderHeight={200}
                />
            </View>
        </View>

    )
}

export default BarberShopDetails;