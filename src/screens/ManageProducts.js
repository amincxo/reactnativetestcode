// screens/ManageProducts.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const ManageProducts = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [message, setMessage] = useState('');

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/addProduct', { productName, productDescription, productPrice });
            setMessage(response.data.message);
        } catch (err) {
            setMessage('Failed to add product');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Product Name" value={productName} onChangeText={setProductName} style={styles.input} />
            <TextInput placeholder="Product Description" value={productDescription} onChangeText={setProductDescription} style={styles.input} />
            <TextInput placeholder="Product Price" value={productPrice} onChangeText={setProductPrice} keyboardType="numeric" style={styles.input} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <Button title="Add Product" onPress={handleAddProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
    message: { color: 'green', marginBottom: 20 },
});

export default ManageProducts;