import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { Button, FlatList, Text,
    View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView} from 'react-native';

import styles from './style';

export default function RegisterPage({ navigation }: any) {
    const [ login, setLogin ] = useState('');
    const [ password, setpassword ] = useState('');
    const [ cpassword, setCPassword] = useState('');
    const [ address, setAddress] = useState('');
    const [ age, setAge] = useState<Number>();
    const [ name, setName] = useState('');

    async function signUp() {
        console.log(`registering...`);
        if (password !== cpassword) {
            ErrorSignUp("Sua senha está incorreta. Por favor, tente novamente!");
            return;
        }
        const response = await fetch(
            'https://example-ecommerce.herokuapp.com/user/customer/add',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: address,
                    age: age,
                    name: name,
                    email: login,
                    userPassword: password,
                })

            }
        );
        if (response.ok) {
            let token: string = await response.text();
            console.log(`Logado: ${token}`);
            navigation.navigate('Product');
        } else {
            let responseText = await response.text();
            console.log(`error: ${responseText}`)
            ErrorSignUp(responseText);
        }
    }

    async function ErrorConvertToNumber(error: string) {
        Alert.alert(
            "Erro em transformar a idade em número!",
            `Error: ${error}`,
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed"),
                }
            ]
        )
    }

    async function ErrorSignUp(error: string) {
        Alert.alert(
            "Erro!!!",
            `Erro: ${error}`,
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Ok pressed"),
                }
            ]
        )
    }

    async function formatToNumber(StringToNumber: string, setFunction: CallableFunction, errorHandler: CallableFunction) {
        try {
            setFunction(Number(StringToNumber.replace(/[^0-9]/g, '')));
        } catch(err) {
            errorHandler(err);
        }
        
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="padding" enabled>
                <View style={styles.mainView}>
                    <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Nome"
                            placeholderTextColor="#F6D6FF"
                            onChangeText={n => setName(n)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            keyboardType='numeric'
                            placeholder="Idade"
                            maxLength={10}
                            placeholderTextColor="#F6D6FF"
                            onChangeText={i => formatToNumber(i, setAge, ErrorConvertToNumber)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Endereço"
                            placeholderTextColor="#F6D6FF"
                            onChangeText={a => setAddress(a)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email."
                            placeholderTextColor="#F6D6FF"
                            onChangeText={log => setLogin(log)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Senha"
                            placeholderTextColor="#F6D6FF"
                            onChangeText={pass => setpassword(pass)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Confirme sua Senha."
                            placeholderTextColor="#F6D6FF"
                            onChangeText={pass => setCPassword(pass)}
                        />
                    </View>

                    <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
        
    )
}
