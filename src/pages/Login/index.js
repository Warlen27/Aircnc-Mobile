import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { 
  Container,
  Logo,
  Label,
  Form,
  Input,
  Button,
  ButtonText,

} from './styles';


import api from '../../services/api';

import logo from '../../assets/logo.png'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');
    
   useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
       if(user) {
         navigation.navigate('List');
        }
      })
    }, []);

  async function handleSubmit() {
      const response = await api.post('/sessions', {
        email
      })

      const { _id } = response.data;

      await AsyncStorage.setItem('user', _id);
      await AsyncStorage.setItem('techs', techs);

      navigation.navigate('List');
  }  

  return (
    <Container behavior="padding">
      <Logo source={logo}/>
      <Form>
        <Label>SEU E-MAIL *</Label>
        <Input
        placeholder="Seu e-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        />

        <Label>TECNOLOGIAS *</Label>
        <Input
        placeholder="Tecnologias de interesse"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={techs}
        onChangeText={setTechs}
        />

        <Button onPress={handleSubmit}>
          <ButtonText>Encontrar spots</ButtonText>
        </Button>

      </Form>
      
    </Container>
  );
}
