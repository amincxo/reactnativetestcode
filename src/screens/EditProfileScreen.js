// src/screens/EditProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { getUser , Data, updateUser  } from '../database/database'; // Corrected function names

const EditProfileScreen = ({ navigation }) => {
  const [userData, setUser ,Data] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    getUser Data() // Corrected function name
      .then(data => {
        setUser Data(data); // Corrected state setter function name
      })
      .catch(error => {
        Alert.alert('خطا', 'خطا در بارگذاری اطلاعات کاربر: ' + error.message);
      });
  }, []);

  const handleUpdate = () => {
    const { firstName, lastName, email } = userData;
    if (firstName && lastName && email) {
      updateUser (userData) // Corrected function name
        .then(() => {
          Alert.alert('موفقیت', 'اطلاعات با موفقیت به‌روزرسانی شد.');
          navigation.goBack();
        })
        .catch(error => {
          Alert.alert('خطا', 'خطا در به‌روزرسانی اطلاعات: ' + error.message);
        });
    } else {
      Alert.alert('خطا', 'لطفاً همه فیلدها را پر کنید.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ویرایش پروفایل</Text>
      <TextInput
        style={styles.input}
        placeholder="نام"
        value={userData.firstName}
        onChangeText={(text) => setUser Data({ ...userData, firstName: text })} // Corrected state setter function name
      />
      <TextInput
        style={styles.input}
        placeholder="نام خانوادگی"
        value={userData.lastName}
        onChangeText={(text) => setUser Data({ ...userData, lastName: text })} // Corrected state setter function name
      />
      <TextInput
        style={styles.input}
        placeholder="ایمیل"
        value={userData.email}
        onChangeText={(text) => setUser Data({ ...userData, email: text })} // Corrected state setter function name
      />
      <Button title="به‌روزرسانی" onPress={handleUpdate} /> {/* Added closing parenthesis */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default EditProfileScreen;