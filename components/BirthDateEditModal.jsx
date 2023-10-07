import { Modal, SafeAreaView, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import api from '../services/Api';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function BirthDateEditModal({ visible, method, goto }) {
  const [birthDate, setbirthDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  
  async function ChangeBirthDate() {
    const userid = await AsyncStorage.getItem("userid");
    api.patch('/profile/birthDate', { userid: userid, birthdate: birthDate })
      .then(res => {
        if (res.status === 200) {
          Alert.alert("Sucesso!", "Data de aniversario alterada com sucesso")
        }
      }).catch((error) => {
        Alert.alert("Erro de servidor", error.response.message);
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
          <Text style={{ fontSize: 14 }}>Selecione a sua data de nascimento</Text>
          <DatePicker
            modal
            mode={'date'}
            open={open}
            date={birthDate}
            onConfirm={date => {
              setOpen(false);
              setbirthDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setOpen(true)}>
            <SafeAreaView
              style={{
                minWidth: '80%',
                height: 35,
                borderRadius: 10,
                backgroundColor: '#97999B',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Selecionar</Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={ChangeBirthDate}>
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
