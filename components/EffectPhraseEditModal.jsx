import { Modal, SafeAreaView, Text, TextInput, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native';
import api from '../services/Api';
import { useState } from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function EffectPhraseEditModal({ visible, method, goto }) {
  const [effectPhrase, setEffectPhrase] = useState("");

  async function ChangeEffectPhrase() {
    const userid = await AsyncStorage.getItem("userid"); 
    api.patch('/profile/effectPhrase', {userid: userid, effectphrase: effectPhrase})   
      .then(res => {
        if (res.status === 200) {
          Alert.alert("Sucesso!", "Frase de efeito alterada com sucesso")
        }
      }).catch((error) => {
        if (error.response.status === 400 && sex === "") {
          Alert.alert("Frase Vazia!", "A frase nao pode ser vazia")
        }
        if (error.response.status === 400) {
          Alert.alert("Digitação Incorreta!", "Não é permitido números na frase")
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
          <Text style={{ fontSize: 16 }}>Digite o sua frase de efeito</Text>
          <TextInput
            onChangeText={(text) => setEffectPhrase(text)}
            style={{
              maxWidth: '80%',
              minWidth: '80%',
              backgroundColor: '#ECECEC',
              borderRadius: 10,
              marginTop: 20,
            }}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={ChangeEffectPhrase}>
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
