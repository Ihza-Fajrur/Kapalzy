import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//screens
import Menu_Awal from './screens/Menu_Awal';
import Daftar_Pesanan from './screens/Daftar_Pesanan';
import Daftar_Pembatalan from './screens/Daftar_Pembatalan';
import Lainnya from './screens/Lainnya';
import { Menu_Detail_Pemesanan } from './screens/Menu_Detail_Pemesanan';
import { Menu_Konfirmasi_Pesanan } from './screens/Menu_Konfirmasi_Pesanan';

const Tab =createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

      initialRouteName='Menu Awal' 
      screenOptions={({ route } ) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === 'Menu Awal'){
            return <Entypo name="home" size={35} color="#00579C" />
          }
          else if(rn === 'Daftar Pesanan'){
            return <Foundation name="book" size={35} color="#00579C" />
          }
          else if(rn === 'Daftar Pembatalan'){
            return <MaterialCommunityIcons name="cash-refund" size={35} color="#00579C" />
          }
          else if(rn === 'Lainnya'){
            return <FontAwesome5 name="bars" size={35} color="#00579C" />
          }
        },
      })}
      >
        <Tab.Screen name = 'Menu Awal' component={Menu_Awal} options={{ headerShown:false }}/>
         <Tab.Screen name = 'Daftar Pesanan' component={Daftar_Pesanan} options={{ headerTitle:'Daftar Pemesanan', headerStyle:{backgroundColor:'#024D88'}, headerTitleAlign:'center', headerTitleStyle:{color:'#FFF'}}}/>
         <Tab.Screen name = 'Daftar Pembatalan' component={Daftar_Pembatalan} options={{ headerTitle:'Daftar Pembatalan', headerStyle:{backgroundColor:'#024D88'}, headerTitleAlign:'center', headerTitleStyle:{color:'#FFF'}}}/>
         <Tab.Screen name = 'Lainnya' component={Lainnya} options={{ headerShown:false }}/>
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
function sub_screen(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Menu Detail Pemesanan" component={Menu_Detail_Pemesanan} />
        <Stack.Screen name="Menu Konfirmasi Pesanan" component={Menu_Konfirmasi_Pesanan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}