// screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 2000); // 2 seconds loading time

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>My App</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default LoadingScreen;