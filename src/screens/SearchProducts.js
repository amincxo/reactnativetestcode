// screens/SearchProducts.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const SearchProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [radius, setRadius] = useState('10'); // Default radius
    const [message, setMessage] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:5000/search', { searchTerm, radius });
            // Process search results
            console.log(response.data);
        } catch (err) {
            setMessage('Search failed');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Search Products" 
                value={searchTerm} 
                onChangeText={setSearchTerm} 
                style={styles.input} 
            />
            <Text>Select Radius:</Text>
            <View style={styles.radioGroup}>
                <Button title="10 km" onPress={() => setRadius('10')} />
                <Button title="30 km" onPress={() => setRadius('30')} />
                <Button title="50 km" onPress={() => setRadius('50')} />
            </View>
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <Button title="Search" onPress={handleSearch} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
    message: { color: 'red', marginBottom: 20 },
    radioGroup: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
});

export default SearchProducts;