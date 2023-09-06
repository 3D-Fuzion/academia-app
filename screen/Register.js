import {Image, Text, TextInput, Keyboard} from 'react-native';
import {
  RegisterInput,
  RegisterInputCode,
} from '../components/Inputs/RegisterInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import RegisterButton from '../components/Buttons/RegisterButton';
import Logo from '../assets/LOGO.svg';
import {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import api from '../services/Api';
export default function Register({navigation}) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState(new Date());
  const [password, setPassword] = useState();
  const [code, setCode] = useState('');
  const [cpf, setCpf] = useState('');
  const [modalIsNotOpen, setFirstOpen] = useState(true);
  const [open, setOpen] = useState(false);
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

  function OpenModal() {
    setOpen(true);
    setFirstOpen(false);
  }

  function Register() {
    api
      .post('login', {
        name: name,
        email: email,
        password: password,
        cpf: cpf,
        academycode: code,
        birthDate: birthDate,
      })
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
  }

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
      <DatePicker
        mode={'date'}
        modal
        open={open}
        date={birthDate}
        onConfirm={date => {
          setOpen(false);
          setBirthDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          width: '60%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        {logo}
      </SafeAreaView>
      <SafeAreaView
        style={{
          marginTop: 10,
          flex: 4,
          width: '60%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        <RegisterInput name={'Nome'} method={setName}></RegisterInput>
        <RegisterInput name={'Email'} method={setEmail}></RegisterInput>

        <SafeAreaView
          style={{
            alignItems: 'center',
            width: '100%',
            height: 60,
            borderRadius: 100,
            justifyContent: 'center',
            backgroundColor: '#D8D8D8',
          }}>
          {modalIsNotOpen ? (
            <Text
              onPress={OpenModal}
              style={{
                textAlign: 'center',
                fontSize: 18,
              }}>
              Data de Nascimento
            </Text>
          ) : (
            <Text
              onPress={OpenModal}
              style={{
                textAlign: 'center',
                fontSize: 18,
              }}>
              {birthDate.toDateString()}
            </Text>
          )}
        </SafeAreaView>

        <RegisterInput name={'Senha'} method={setPassword}></RegisterInput>
        <RegisterInput name={'Cpf'} method={setCpf}></RegisterInput>
        <RegisterInputCode name={'Código'} method={setCode}></RegisterInputCode>
        <RegisterButton method={Register} />
      </SafeAreaView>
    </SafeAreaView>
  );
}
