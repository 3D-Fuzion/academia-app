import {Image, Text, TextInput} from 'react-native';
import {
  RegisterInput,
  RegisterInputCode,
} from '../components/Inputs/RegisterInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import RegisterButton from '../components/Buttons/RegisterButton';
import Logo from '../assets/LOGO.svg';
import {useState} from 'react';

export default function Register() {
  const [isLogoActive, setLogoActive] = useState(true);
  let logo;
  function SwitchLogo() {
    setLogoActive(state => !state);
    console.log('Deu');
  }
  if (isLogoActive) {
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
        <RegisterInput method={SwitchLogo} name={'Nome'}></RegisterInput>
        <RegisterInput method={SwitchLogo} name={'Email'}></RegisterInput>
        <RegisterInput
          method={SwitchLogo}
          name={'Data de Nasc'}></RegisterInput>
        <RegisterInput method={SwitchLogo} name={'Senha'}></RegisterInput>
        <RegisterInputCode
          method={SwitchLogo}
          name={'Código'}></RegisterInputCode>
        <RegisterButton />
      </SafeAreaView>
    </SafeAreaView>
  );
}
