import {Keyboard, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RegisterInput} from '../components/Inputs/RegisterInput';
import {useState, useEffect} from 'react';
import Logo from '../assets/LOGO.svg';
import LoginButton from '../components/Buttons/LoginButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Login() {
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

  if (!isKeyboardVisible) {
    logo = <Logo style={{marginTop: 100}} width={420} height={120}></Logo>;
  } else {
    logo = <></>;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ECECEC',
      }}>
      {logo}
      <Text style={{color: '#187B63', fontSize: 34, marginTop: 30}}>
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
        <RegisterInput name={'Email'} />
        <RegisterInput name={'Senha'} />
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
          style={{
            marginTop: 25,
          }}>
          <Text style={{fontSize: 20}}>Voltar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
