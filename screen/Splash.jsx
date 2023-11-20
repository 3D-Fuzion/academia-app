import { SafeAreaView, Alert } from 'react-native';
import { Text } from 'react-native';
import LoginButton from '../components/Buttons/LoginButton';
import CreateAccountButton from '../components/Buttons/CreateAccountButton';
import Logo from '../assets/LOGO.svg';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/Api';
import { useState } from 'react';

export default function Intro({ navigation }) {
  function Register() {
    navigation.navigate("Register");
  }

  function Login() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Logo style={{ marginTop: 100 }} width={420} height={120} />
      <Text style={{ color: '#187B63', fontSize: 34, marginTop: 30 }}>
        Bem vindo!
      </Text>
      <SafeAreaView
        style={{
          marginTop: 30,
          width: '60%',
          marginLeft: 100,
          marginRight: 100,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        <LoginButton method={Login} />
        <CreateAccountButton createMethod={Register} />

      </SafeAreaView>
    </SafeAreaView>

  );
}
