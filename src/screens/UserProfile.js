// screens/UserProfile.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const UserProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdateProfile = async () => {
        // Implement update profile logic
        try {
            const response = await axios.put('http://localhost:5000/updateProfile', { name, email, password });
            setMessage(response.data.message);
        } catch (err) {
            setMessage('Update failed');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" value={name}// screens/UserProfile.js (ادامه)
            onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <Button title="Update Profile" onPress={handleUpdateProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
    message: { color: 'green', marginBottom: 20 },
});

export default UserProfile;