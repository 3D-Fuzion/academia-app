import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import { TouchableOpacity } from 'react-native';
import EditField from '../components/EditField';
import { Modal, SafeAreaView, Text } from 'react-native'
import { useState } from 'react';
export default function EditModal({ visible, method, goto }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    }}>
      <Modal
        style={{ backgroundColor: 'green' }}
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          () => method();
        }}>
        <SafeAreaView style={{
          width:308, 
          height:356, 
          borderRadius: 10, 
          backgroundColor: "white", 
          alignSelf: "center", 
          marginTop: 210, 
          justifyContent:"flex-end", 
          elevation: 10
        }}>
        <SafeAreaView style={{flex: 1}}>
          <Text style={{marginLeft: 15, marginTop:20, fontSize: 21, color: "#187B63"}}>Editar Perfil</Text>
        </SafeAreaView >
        <EditField title={"Nome"}/>
        <EditField title={"Sexo"}/>
        <EditField title={"Data de nascimento"}/>
        <EditField title={"Alterar senha"}/>
        <EditField title={"Frase de efeito"}/>
          <SafeAreaView style={{
            backgroundColor:"#187B63", 
            height: 31, 
            borderBottomRightRadius: 10, 
            borderBottomLeftRadius: 10
          }}/>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  )
}