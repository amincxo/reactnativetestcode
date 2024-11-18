// screens/ProductDetailsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
    const { product } = route.params; // Get product data from navigation params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button title="Add to Cart" onPress={() => {/* Add to cart logic */}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    description: { fontSize: 16, marginBottom: 10 },
    price: { fontSize: 20, marginBottom: 20 },
});

export default ProductDetailsScreen;