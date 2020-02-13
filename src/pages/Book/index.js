import React, { useState } from 'react';

import api from '../../services/api'

import { AsyncStorage, Alert } from 'react-native';

 import { 
   Container,
   Label,
   Input,
   Button,
   ButtonText,
   CancelButton
 } from './styles';

export default function Book({ navigation }) {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

async  function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(`/spots/${id}/bookings`, {
      date
    },{
      headers: { user_id }
    });

    Alert.alert('Solicitação de reserva enviada.');

    navigation.navigate('List');

  }

  function handleCancel() {
    navigation.navigate('List');
  }
  return (
    <Container>
        <Label>DATA DE INTERESSE *</Label>
        <Input
        placeholder="Qual data quer reservar?"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
    />

        <Button onPress={handleSubmit}>
          <ButtonText>Solicitar reserva</ButtonText>
        </Button>

        <CancelButton onPress={handleCancel}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>

    </Container>
  );
}
