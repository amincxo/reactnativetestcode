// screens/RegisterUser.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterUser  = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register/user', { firstName, lastName, email, password });
            setMessage(response.data.message);
            navigation.navigate('Login');
        } catch (err) {
            setMessage('Registration failed');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.input} />
            <TextInput placeholder="Last Name" value={lastName}// screens/RegisterUser Screen.js (ادامه)
            onChangeText={setLastName} style={styles.input} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <Button title="Register" onPress={handleRegister} />
            <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Back to Login</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
    message: { color: 'green', marginBottom: 20 },
    link: { color: 'blue', marginTop: 20 },
});

export default RegisterUser ;