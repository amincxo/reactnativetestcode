// screens/UserScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, User!</Text>
            <Button title="Search Products" onPress={()=> navigation.navigate('SearchProducts')} />
            <Button title="Search History" onPress={() => navigation.navigate('SearchHistory')} />
            <Button title="Profile" onPress={() => navigation.navigate('User Profile')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});

export default UserScreen;