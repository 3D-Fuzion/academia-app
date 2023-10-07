import { Modal, SafeAreaView, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import api from '../services/Api';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function PasswordEditModal({ visible, method, goto }) {
  const [password, setPassword] = useState("");

  async function ChangePassword() {
    const email = await AsyncStorage.getItem("email");
    const cpf = await AsyncStorage.getItem("cpf");
    console.log(password)
    api.patch('/login/changepwd', { email: email, newpassword: password, cpf: cpf })
      .then(res => {
        if (res.status === 200) {
          Alert.alert("Sucesso!", "Senha alterada com sucesso")
        }
      }).catch((error) => {
        if (error.response.status === 400 && error.response.data.errorCode === "3") {
          Alert.alert("Senha pequena", "A senha tem que ter no minimo 8 caracteres")
        }
        if (error.response.status === 400 && error.response.data.errorCode === "6") {
          Alert.alert("CPF Incorreto", "Seu cpf esta incorreto")
        }
      });
  }

  return (
    <Modal
      style={{ backgroundColor: 'green', alignItems: 'center' }}
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        () => method();
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            width: 250,
            height: 200,
            borderRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => method()}>
            <SafeAreaView
              style={{
                width: 25,
                height: 25,
                borderRadius: 10,
                backgroundColor: '#E0115F',
                marginRight: 10,
                marginTop: 10,
              }}></SafeAreaView>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>Digite a sua nova senha</Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={{
              maxWidth: '80%',
              minWidth: '80%',
              backgroundColor: '#ECECEC',
              borderRadius: 10,
              marginTop: 20,
            }}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={ChangePassword}>
            <SafeAreaView
              style={{
                minWidth: '80%',
                height: 35,
                borderRadius: 10,
                backgroundColor: '#187B63',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Salvar</Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
}
