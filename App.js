import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu_Awal from './screens/Menu_Awal';
import Menu_Detail_Pemesanan from './screens/Menu_Detail_Pemesanan';
import Menu_Konfirmasi_Pesanan from './screens/Menu_Konfirmasi_Pesanan';
import Daftar_Pesanan from './screens/Daftar_Pesanan';
import Daftar_Pembatalan from './screens/Daftar_Pembatalan';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu_Awal' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Menu_Awal" component={Menu_Awal} />
        {/* <Stack.Screen name="Menu_Konfirmasi_Pesanan" component={Menu_Konfirmasi_Pesanan} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}