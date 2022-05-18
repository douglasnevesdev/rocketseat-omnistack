import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { SafeAreaView, ScrollView , Text, Image, Alert, Platform, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

import api from '../services/api';

export default function List({ navigation }) {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.106:3333',{
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
        });
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {

            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
            const response = api.post('/spots', {

                techsArray
            });
        })
    }, []);

return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <ScrollView>
          {techs.map(tech => <SpotList key={tech} tech={tech} />)}
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: {isAndroid} ? 25 : 10
    },
    exitButton: {
        backgroundColor: '#ffffff',
        borderRadius: 2,
        alignSelf: 'flex-end',
        height: 20
    }
});

function isAndroid(){
    return Platform.OS === 'android';
}

