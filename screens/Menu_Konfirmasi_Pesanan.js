import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
// import styles from '../style/Menu_Konfirmasi_Pesanan_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Menu_Konfirmasi_Pesanan({navigation}){
    return(
        <SafeAreaView >
            <TouchableOpacity  onPress={()=>navigation.navigate('Menu Detail Pemesanan')}>
                            <AntDesign name="search1" size={24} color="#FFF" />
                            <Text >
                                Buat Tiket
                            </Text>
                        </TouchableOpacity>
        </SafeAreaView>
    );
}
