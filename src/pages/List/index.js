import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { AsyncStorage, ScrollView, Alert } from 'react-native';



import SpotList from '../../components/SpotList';


import { Container, Logo } from './styles';
import logo from '../../assets/logo.png'

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.43.45:3333', {
        query: { user_id }
      })

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
      })
    })
  }, []);

  useEffect(() => {
      AsyncStorage.getItem('techs').then(storagedTechs => {
        const techsArray = storagedTechs.split(',').map(tech => tech.trim());

        setTechs(techsArray);
      })

  }, []);

  return (
    <Container>
      <Logo source={logo}/>
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
      </ScrollView>
    </Container>
  );
}
 
