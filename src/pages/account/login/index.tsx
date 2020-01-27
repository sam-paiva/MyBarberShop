import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Content, Item, Input, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Bem vindo</Text>
            <View style={styles.containerBody}>
                <Content>
                    <Item style={styles.input} rounded>
                        <Icon style={styles.icon} name={'email'} size={20} color={'black'} />
                        <Input placeholderTextColor={'grey'} placeholder='E-mail' />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Icon style={styles.icon} name={'lock'} size={20} color={'black'} />
                        <Input placeholderTextColor={'grey'} placeholder='Senha' secureTextEntry={true} />
                    </Item>
                    <Button style={styles.button} rounded>
                        <Text>
                            Entrar
                        </Text>
                    </Button>
                </Content>
            </View>
        </View>

    );
}

export default Login;