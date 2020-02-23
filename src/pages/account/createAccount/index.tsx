import React, { FC, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Content, Item, Input, Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { showToast } from '../../../utils/utils';
import { User } from '../../../types/account';
import { useDispatch } from 'react-redux';
import { createAccountAction } from '../../../actions/accountActions';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateAccount: FC<Props> = (props: Props) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const dispatch = useDispatch();

    function createAccount() {
        if (!email || !password || !name || !lastName) {
            showToast('Por favor, preencha todos os campos acima', 'red');
            return;
        }

        const User: User = {
            firstName: name,
            password: password,
            email: email,
            lastName: lastName
        }

        dispatch(createAccountAction(User, props.navigation));
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>
                <Content>
                    <Item style={styles.input} rounded>
                        <Input style={styles.inputTex} onChangeText={(e) => setEmail(e)} placeholderTextColor={'grey'} placeholder='E-mail' />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Input style={styles.inputTex} onChangeText={(e) => setPassword(e)} placeholderTextColor={'grey'} placeholder='Senha' secureTextEntry={true} />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Input style={styles.inputTex} onChangeText={(e) => setName(e)} placeholderTextColor={'grey'} placeholder='Nome' />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Input style={styles.inputTex} onChangeText={(e) => setLastName(e)} placeholderTextColor={'grey'} placeholder='Sobrenome' />
                    </Item>

                    <Button onPress={() => createAccount()}
                        style={styles.button}
                        rounded>
                        <Text>
                            Criar Conta
                        </Text>
                    </Button>
                </Content>
            </View>
        </View>
    );
}

export default CreateAccount;