// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from './src/screens/UserScreen';
import SearchProducts from './src/screens/SearchProducts';
import SearchHistory from './src/screens/SearchHistory';
import UserProfile from './src/screens/UserProfile';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ManageProducts from './src/screens/ManageProducts';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserScreen">
                <Stack.Screen name="UserScreen" component={UserScreen} />
                <Stack.Screen name="SearchProducts" component={SearchProducts} />
                <Stack.Screen name="SearchHistory" component={SearchHistory} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                <Stack.Screen name="ManageProducts" component={ManageProducts} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;