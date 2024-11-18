// screens/SellerScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SellerScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Seller!</Text>
            <Button title="Manage Products" onPress={() => navigation.navigate('ManageProducts')} />
            <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});

export default SellerScreen;