import {Image, Text, TextInput, Keyboard} from 'react-native';
import {
  RegisterInput,
  RegisterInputCode,
} from '../components/Inputs/RegisterInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import RegisterButton from '../components/Buttons/RegisterButton';
import Logo from '../assets/LOGO.svg';
import {useState, useEffect} from 'react';

export default function Register() {
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
    logo = <Logo style={{marginTop: 40}} width={400} height={100}></Logo>;
  } else {
    logo = <></>;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          width: '60%',
          marginLeft: 100,
          marginRight: 100,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        {logo}
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 4,
          width: '60%',
          marginLeft: 100,
          marginRight: 100,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        <RegisterInput name={'Nome'}></RegisterInput>
        <RegisterInput name={'Email'}></RegisterInput>
        <RegisterInput name={'Data de Nasc'}></RegisterInput>
        <RegisterInput name={'Senha'}></RegisterInput>
        <RegisterInputCode name={'Código'}></RegisterInputCode>
        <RegisterButton />
      </SafeAreaView>
    </SafeAreaView>
  );
}
