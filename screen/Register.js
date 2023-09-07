import { Image, Text, TextInput, Keyboard, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterButton from '../components/Buttons/RegisterButton';
import Logo from '../assets/LOGO.svg';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import api from '../services/Api';
export default function Register({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState(new Date());
  const [password, setPassword] = useState('');
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
    console.log('Registered');
    console.log(name, email, password, cpf, birthDate, code);
    api
      .post('/user', {
        name: name,
        email: email,
        password: password,
        cpf: cpf,
        academycode: code,
        birthdate: birthDate,
      })
      .then(res => {
        if (res.status === 201) {
          Alert.alert("Cadastro Efetuado", "O academia vai responder a sua solicitacao em breve, você já pode usar a sua conta")
          navigation.navigate('Login');
        }
      })
      .catch(err => {
        if (err.response.data.errorCode === "1") {
          Alert.alert("Email já cadastrado", "Use outro email ou tente recuperar a sua senha")
        }
        if (err.response.data.errorCode === "2") {
          Alert.alert("CPF Inválido", "Digite o cpf somente com numeros")
        }
        if (err.response.data.errorCode === "3") {
          Alert.alert("Senha inválida", "A senha tem que possuir pelo menos 8 digitos")
        }
        if (err.response.data.errorCode === "4") {
          Alert.alert("Academia nao encontrada", "Verifique o codigo digitado")
        }
<<<<<<< HEAD
=======

>>>>>>> cafca3f6ef732e06c219c7f99db85de644c21cc5
      });
  }

  if (!isKeyboardVisible) {
    logo = <Logo style={{ marginTop: 40 }} width={400} height={100}></Logo>;
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
        <TextInput
          placeholder="Nome"
          onChangeText={text => {
            setName(text);
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
          placeholder="Email"
          onChangeText={text => {
            setEmail(text);
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
          secureTextEntry={true}
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
        <TextInput
          placeholder="CPF"
          onChangeText={text => {
            setCpf(text);
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
          maxLength={11}
        />
        <SafeAreaView
          style={{
            alignItems: 'center',
            width: 230,
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

        <TextInput
          placeholder="Codigo Academia"
          onChangeText={text => {
            setCode(text);
          }}
          style={{
            textAlign: 'center',
            height: 60,
            fontSize: 18,
            width: 230,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            borderWidth: 1,
            borderColor: '#187B63',
            backgroundColor: '#D8D8D8',
          }}
          maxLength={8}
        />
        <RegisterButton
          method={() => {
            Register();
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
