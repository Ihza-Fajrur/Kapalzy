import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import styles from '../style/Menu_Awal_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Menu_Awal({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* <View style={styles.header_bar}>
                <FontAwesome5 name="bars" size={24} color="black" />
                </View >
                <Text style={styles.header_text}>Grab Flight</Text> 
                <View style={styles.header_bar}>
                <FontAwesome5 name="home" size={24} color="black" />
                </View> */}
            </View>

            {/* Batas Header - Body */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.body}>
                    <View style={styles.content_container}>
                        <Text style={[{color:'#00579C', fontWeight:'bold', fontSize:30, lineHeight:35, marginBottom:50, textAlign:'center', marginTop:10}]}>
                            Kapalzy
                        </Text>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Pelabuhan Awal
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="ship" size={24} color="#9D9D9D" />
                                <TouchableOpacity style={styles.touchableContainer}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        Pilih Pelabuhan Awal
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Pelabuhan Tujuan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="ship" size={24} color="#9D9D9D" />
                                <TouchableOpacity style={styles.touchableContainer}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        Pilih Pelabuhan Tujuan
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Kelas Layanan
                            </Text>
                            <View style={styles.input_container2}>
                            <Ionicons name="people" size={24} color="#9D9D9D" />
                                <TouchableOpacity style={styles.touchableContainer}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        Pilih Layanan
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Tanggal Masuk Pelabuhan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="calendar" size={24} color="#9D9D9D"/>
                                <TouchableOpacity style={styles.touchableContainer}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        Pilih Tanggal Masuk
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'#9D9D9D', fontSize:17, lineHeight:19,}]}>
                                Jam Masuk Pelabuhan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="clock" size={24} color="#9D9D9D" />
                                <TouchableOpacity style={styles.touchableContainer}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold'}]}>
                                        Pilih Jam Masuk
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            
                        <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginBottom:15}]}>
                            <TouchableOpacity style={[{width:320,height:40,marginTop:10,marginLeft:10,padding:10,flexDirection:'row',backgroundColor:'#EFF4F4',borderRadius:4, borderColor:'black',}]}
                            onPress={()=>navigation.navigate('Menu Konfirmasi Pesanan')}>
                                <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'left'}]}>
                                    Dewasa
                                </Text>
                                {/* <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'right'}]}>
                                    1 Orang
                                </Text> */}
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.input_container2}>
                            <TextInput 
                                style={[{paddingLeft:5,
                                    width:330,
                                    height:45,
                                    borderWidth:1,
                                    borderColor: '#777',
                                    padding: 8,
                                    borderRadius:8,
                                    margin: 10,}]}
                                placeholder='Dewasa'
                                underlineColorAndroid='transparent'
                                placeholderTextColor={'black'}
                                fontWeight={'bold'}
                            >
                            </TextInput>
                        </View> */}
                        <TouchableOpacity style={styles.button}>
                            <AntDesign name="search1" size={24} color="#FFF" />
                            <Text style={[{color:'#FFF', fontSize:20, lineHeight:19,}]}>
                                Buat Tiket
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Batas Body - Footer */}

            {/* <View style={styles.footer}>
                <View style={styles.footerIcon}>
                    <Entypo name="home" size={35} color="#00579C" />
                    <Text style={[{color:'#00579C',}]}>
                        Beranda
                    </Text>
                </View>
                <View style={styles.footerIcon}>
                    <Foundation name="book" size={35} color="#00579C" />
                    <Text style={[{color:'#00579C',}]}>
                        Pesanan Saya
                    </Text>
                </View>
                <View style={styles.footerIcon}>
                    <MaterialCommunityIcons name="cash-refund" size={35} color="#00579C" />
                    <Text style={[{color:'#00579C',}]}>
                        Pembatalan
                    </Text>
                </View>
                <View style={styles.footerIcon}>
                    <FontAwesome5 name="bars" size={35} color="#00579C" />
                    <Text style={[{color:'#00579C',}]}>
                        Lainnya
                    </Text>
                </View>
            </View> */}
        </SafeAreaView>
    );
}

