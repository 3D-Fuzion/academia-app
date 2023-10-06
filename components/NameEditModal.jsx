import { Modal, SafeAreaView, Text, TextInput, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native';
import api from '../services/Api';
import { useState } from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function NameEditModal({ visible, method, goto }) {
  const [name, setName] = useState("");

  async function ChangeName() {
    const userid = await AsyncStorage.getItem("userid"); 
    api.patch('/profile/name', {userid: userid, name: name})   
      .then(res => {
        if (res.status === 200) {
          Alert.alert("Sucesso!", "Nome alterado com sucesso")
        }
      }).catch((error) => {
        if (error.response.status === 400 && name === "") {
          Alert.alert("Nome Vazio!", "O nome nao pode ser vazio")
        }
        if (error.response.status === 400) {
          Alert.alert("Digitação Incorreta!", "Não é permitido números no nome")
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
          <Text style={{ fontSize: 16 }}>Digite o seu nome</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={{
              maxWidth: '80%',
              minWidth: '80%',
              backgroundColor: '#ECECEC',
              borderRadius: 10,
              marginTop: 20,
            }}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={ChangeName}>
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
