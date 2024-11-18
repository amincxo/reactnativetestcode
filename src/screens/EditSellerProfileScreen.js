// src/screens/EditSellerProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { getSellerData, updateSeller } from '../database/database'; // فرض بر این است که این توابع را ایجاد می‌کنید

const EditSellerProfileScreen = ({ navigation }) => {
  const [sellerData, setSellerData] = useState({
    storeName: '',
    storeType: '',
    email: '',
  });

  useEffect(() => {
    getSellerData() // فرض بر این است که این تابع را ایجاد می‌کنید
      .then(data => {
        setSellerData(data);
      })
      .catch(error => {
        Alert.alert('خطا', 'خطا در بارگذاری اطلاعات فروشنده: ' + error.message);
      });
  }, []);

  const handleUpdate = () => {
    const { storeName, storeType, email } = sellerData;
    if (storeName && storeType && email) {
      updateSeller(sellerData) // فرض بر این است که این تابع را ایجاد می‌کنید
        .then(() => {
          Alert.alert('موفقیت', 'اطلاعات فروشنده با موفقیت به‌روزرسانی شد.');
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
      <Text style={styles.title}>ویرایش پروفایل فروشنده</Text>
      <TextInput
        style={styles.input}
        placeholder="نام فروشگاه"
        value={sellerData.storeName}
        onChangeText={(text) => setSellerData({ ...sellerData, storeName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="نوع فروشگاه"
        value={sellerData.storeType}
        onChangeText={(text) => setSellerData({ ...sellerData, storeType: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="ایمیل"
        value={sellerData.email}
        onChangeText={(text) => setSellerData({ ...sellerData, email: text })}
      />
      <Button title="به‌روزرسانی" onPress={handleUpdate} />
      <Text style={styles.cancelText} onPress={() => navigation.goBack()}>
        انصراف
      </Text>
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
  cancelText: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default EditSellerProfileScreen;