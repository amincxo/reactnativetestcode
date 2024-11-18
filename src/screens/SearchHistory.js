// screens/SearchHistory.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchHistory = () => {
    // Fetch search history from local database or API
    const searchHistory = ['Product 1', 'Product 2', 'Product 3']; // Example data

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search History</Text>
            {searchHistory.map((item, index) => (
                <Text key={index} style={styles.item}>{item}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    item: { fontSize: 18, marginBottom: 10 },
});

export default SearchHistory;