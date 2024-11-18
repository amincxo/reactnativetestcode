// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { addSearchHistory, getProducts } from '../database/database'; // فرض بر این است که این تابع را ایجاد می‌کنید

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    if (query) {
      addSearchHistory(query)
        .then(() => {
          // اینجا باید منطق جستجو بر اساس// src/screens/SearchScreen.js

          // اینجا باید منطق جستجو بر اساس query را اضافه کنید
          getProducts(query) // فرض بر این است که این تابع را ایجاد می‌کنید
          .then(results => {
            setProducts(results);
          })
          .catch(error => {
            Alert.alert('خطا', 'خطا در جستجو: ' + error.message);
          });
      })
      .catch(error => {
        Alert.alert('خطا', 'خطا در ذخیره تاریخچه جستجو: ' + error.message);
      });
  } else {
    Alert.alert('خطا', 'لطفاً یک عبارت جستجو وارد کنید.');
  }
};

return (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="جستجو..."
      value={query}
      onChangeText={setQuery}
    />
    <Button title="جستجو" onPress={handleSearch} />
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price} تومان</Text>
        </View>
      )}
    />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
},
input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 20,
  paddingHorizontal: 10,
},
productContainer: {
  padding: 10,
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
},
productName: {
  fontSize: 18,
},
productPrice: {
  fontSize: 16,
  color: 'green',
},
});

export default SearchScreen;