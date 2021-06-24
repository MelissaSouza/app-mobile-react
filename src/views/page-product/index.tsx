import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text,
    View, TextInput, StyleSheet, Dimensions, Alert} from 'react-native';

export default function ProductPage({ navigation }: any) {

    const [ produtos, setProdutos ] = useState();

    useEffect(() => {
        getProducts();
    }, []);


    async function getProducts() {
        let products = await fetch(
            "https://example-ecommerce.herokuapp.com/product/list",
            {
                method: 'GET'
            }
        );
        let result = await products.json();
        console.log(result);
        setProdutos(result);
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Produtos</Text>
            <FlatList
                data={produtos}
                style={styles.list}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.amount}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#F6D6FF"
    },
    list: {
        width: Dimensions.get('window').width - 20
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        width: Dimensions.get('screen').width - 40,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: 20,
        height: 50,
    },
    button: {
        marginVertical: 10,
    }
})