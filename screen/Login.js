import { Keyboard, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import Logo from '../assets/LOGO.svg';
import LoginButton from '../components/Buttons/LoginButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CreateAccountButton from '../components/Buttons/CreateAccountButton';
export default function Login({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  let logo;

  function Register() {
    console.log("Goinng to Register Screen")
    navigation.navigate("Register");
  }
  function Return() {
    console.log("Goinng to Splash Screen")
    navigation.navigate("Splash");
  }
  if (!isKeyboardVisible) {
    logo = <Logo style={{ marginTop: 100 }} width={420} height={120}></Logo>;
  } else {
    logo = <></>;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {logo}
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
        <TextInput
          placeholder="Email"
          onChangeText={text => {
            setPassword(text);
          }}
          style={{
            textAlign: 'center',
            height: 60,
            fontSize: 18,
            width: 230,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            backgroundColor: '#D8D8D8',
          }}
          maxLength={128}
        />

        <TextInput
          placeholder="Senha"
          onChangeText={text => {
            setPassword(text);
          }}
          style={{
            textAlign: 'center',
            height: 60,
            fontSize: 18,
            width: 230,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            backgroundColor: '#D8D8D8',
          }}
          maxLength={128}
        />

        <LoginButton />
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontSize: 18,
              color: '#187B63',
            }}>
            Esqueci a Senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Return}
          style={{
            marginTop: 25,
          }}>
          <Text style={{ fontSize: 20 }}>Voltar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
