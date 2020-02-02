import React, { FC, useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import styles from './styles';
import { Content, Item, Input, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { showToast } from '../../../utils/utils';
import * as actions from '../../../actions/accountActions';
import { useDispatch } from 'react-redux';
import * as types from '../../../types/account/index';
import { isSignedIn } from '../../../service/auth';


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    visible: boolean,
}

const Login: FC<Props> = (props) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateLogin() {
        if (!email || !password) {
            showToast('Por favor preencha um email e uma senha válida', 'red');
            return;
        }

        const login: types.Login = {
            email: email,
            password: password
        }

        dispatch(actions.loginAction(login, props.navigation));
    }

    useEffect(() => {
        isSignedIn();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Bem vindo</Text>
            <View style={styles.containerBody}>
                <Content>
                    <Item style={styles.input} rounded>
                        <Icon style={styles.icon} name={'email'} size={20} color={'black'} />
                        <Input onChangeText={(e) => setEmail(e)} placeholderTextColor={'grey'} placeholder='E-mail' />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Icon style={styles.icon} name={'lock'} size={20} color={'black'} />
                        <Input onChangeText={(e) => setPassword(e)} placeholderTextColor={'grey'} placeholder='Senha' secureTextEntry={true} />
                    </Item>
                    <View style={styles.gridRow}>
                        <TouchableHighlight>
                            <Text style={styles.textOption}>Criar Conta</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text style={styles.textOption}>Esqueci a Senha?</Text>
                        </TouchableHighlight>
                    </View>
                    <Button onPress={() => validateLogin()}
                        style={styles.button}
                        rounded>
                        <Text>
                            Entrar
                        </Text>
                    </Button>
                </Content>
            </View>

        </View >

    );
}

export default Login;