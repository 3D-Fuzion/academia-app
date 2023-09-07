/* eslint-disable react/react-in-jsx-scope */
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import LoginButton from '../components/Buttons/LoginButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CreateAccountButton from '../components/Buttons/CreateAccountButton';
import Logo from '../assets/LOGO.svg';
export default function Intro({navigation}) {

  function Register() {
    console.log("Goinng to Register Screen")
    navigation.navigate("Register");
  }

  function Login() {
    console.log("Goinng to Login Screen")
    navigation.navigate("Login");
  }



  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Logo style={{ marginTop: 100 }} width={420} height={120}/>
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
        <LoginButton method={Login}/>
        <CreateAccountButton createMethod={Register} />

      </SafeAreaView>
    </SafeAreaView>

  );
}
