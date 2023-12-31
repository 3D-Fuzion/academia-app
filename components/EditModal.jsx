import { TouchableOpacity } from 'react-native';
import NameEditModal from '../components/NameEditModal'
import SexEditModal from '../components/SexEditModal'
import EffectPhraseEditModal from '../components/EffectPhraseEditModal'
import EditField from '../components/EditField';
import { useState } from 'react';
import { Modal, SafeAreaView, Text } from 'react-native'
import PasswordEditModal from './PasswordEditModal';
import BirthDateEditModal from './BirthDateEditModal';

export default function EditModal({ visible, method, goto }) {
  const [nameModal, setNameModal] = useState(false);
  const [sexModal, setSexModal] = useState(false);
  const [effectPhraseModal, setEffectPhraseModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [birthDateModal, setbirthDateModal] = useState(false);

  function SwitchBirthDateModal() {
    if (birthDateModal === false) {
      setbirthDateModal(true);
    } else {
      setbirthDateModal(false);
    }
  }

  function SwitchPasswordModal() {
    if (passwordModal === false) {
      setPasswordModal(true);
    } else {
      setPasswordModal(false);
    }
  }

  function SwitchEffectPhraseModal() {
    if (effectPhraseModal === false) {
      setEffectPhraseModal(true);
    } else {
      setEffectPhraseModal(false);
    }
  }

  function SwitchSexModal() {
    if (sexModal === false) {
      setSexModal(true);
    } else {
      setSexModal(false);
    }
  }

  function SwitchNameModal() {
    if (nameModal === false) {
      setNameModal(true);
    } else {
      setNameModal(false);
    }
  }

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
          width: 308,
          height: 356,
          borderRadius: 10,
          backgroundColor: "white",
          alignSelf: "center",
          marginTop: 210,
          justifyContent: "flex-end",
          elevation: 10
        }}>
          <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ marginLeft: 15, marginTop: 20, fontSize: 21, color: "#187B63" }}>Editar Perfil</Text>
          </SafeAreaView >
          <TouchableOpacity onPress={() => method()} style={{
            flex: 1,
            position: "absolute",
            transform: [{ translateX: +262 }, { translateY: -310 }],
            backgroundColor: "#E0115F",
            width: 30,
            height: 30,
            borderRadius: 30,
            elevation: 10
          }}>
          </TouchableOpacity>
          <EditField title={"Nome"} method={SwitchNameModal} />
          <EditField title={"Sexo"} method={SwitchSexModal} />
          <EditField title={"Data de nascimento"} method={SwitchBirthDateModal} />
          <EditField title={"Alterar senha"} method={SwitchPasswordModal} />
          <EditField title={"Frase de efeito"} method={SwitchEffectPhraseModal} />
          <SafeAreaView style={{
            backgroundColor: "#187B63",
            height: 31,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10
          }} />
        </SafeAreaView>
      </Modal>
      <NameEditModal style={{ alignSelf: "center", justifyContent: "center" }} method={SwitchNameModal} visible={nameModal} />
      <SexEditModal style={{ alignSelf: "center", justifyContent: "center" }} method={SwitchSexModal} visible={sexModal} />
      <EffectPhraseEditModal style={{ alignSelf: "center", justifyContent: "center" }} method={SwitchEffectPhraseModal} visible={effectPhraseModal} />
      <PasswordEditModal style={{ alignSelf: "center", justifyContent: "center" }} method={SwitchPasswordModal} visible={passwordModal} />
      <BirthDateEditModal style={{ alignSelf: "center", justifyContent: "center" }} method={SwitchBirthDateModal} visible={birthDateModal} />
    </SafeAreaView>
  )
}
