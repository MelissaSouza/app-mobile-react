import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { Image, TouchableOpacity, Button, FlatList, Text, View, TextInput, StyleSheet, Dimensions, Alert} from 'react-native';

import styles from './style';
import RegisterPage from '../page-register';

export default function LoginPage({ navigation }: any) {

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');

    function alertErrorLogin(error: string) {
        console.log(error);
        Alert.alert(
            "Erro de login!",
            `Details: ${error}`,
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed"),
                }
            ]
        )
    }

    async function appLogin() {
        console.log(`loggging in ... ${login}:${password}`);
        const response = await fetch(
            'https://example-ecommerce.herokuapp.com/user/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    password: password,
                })
            }
        );
        if (response.ok) {
            let token: string = await response.text();  
            console.log(`login success: ${token}`);
            navigation.navigate('Product');
        } else {
            alertErrorLogin((await response.text()).toString());
        }
    }

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require("../../../assets/icon.png")} />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#ffffff"
                onChangeText={(email) => setLogin(email)}
                />
            </View>
 
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Senha"
                placeholderTextColor="#ffffff"
                secureTextEntry={true}
                onChangeText={(p) => setPassword(p)}
                />
            </View>
        
            <TouchableOpacity>
                <Text style={styles.forgot_button} onPress={() => navigation.navigate('Register')}>Registre-se</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.loginBtn} onPress={appLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
