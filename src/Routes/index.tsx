import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import LoginPage from '../views/page-login';
import RegisterPage from '../views/page-register';
import ProductPage from '../views/page-product';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
      
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LoginPage} options={{
                        headerShown: false,
                    }}/>
                <Stack.Screen name="Register" component={RegisterPage} />
                <Stack.Screen name="Product" component={ProductPage} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
