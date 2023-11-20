import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import SideModal from '../components/SideModal'
import CommandBar from '../components/CommandBar';
import TopBar from '../components/TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Feed({ navigation }) {
  const [USER_FULL_NAME, setUserFullName] = useState("")
  const [menuModal, setMenuModal] = useState(false);
  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
    }
  }

  function Navigate(name) {
    navigation.navigate(name);
  }

  useEffect(() => {
    GetUsername();
  }, [""])

  async function GetUsername() {
    var username = await AsyncStorage.getItem("username")
    setUserFullName(username)
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}>
        <SafeAreaView>
          <SideModal style={{ display: "none" }} visible={menuModal} method={SwitchModal} goto={Navigate} />
        </SafeAreaView>
        <TopBar style={{ flex: 10 }} screenTitle={"feed"} method={SwitchModal} variable={menuModal}></TopBar>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 84,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ECECEC',
        }}>
        <SafeAreaView
          style={{
            left: -50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SafeAreaView
            style={{
              width: 64,
              marginLeft: 20,
              height: 64,
              borderRadius: 100,
              backgroundColor: 'white',
            }}></SafeAreaView>
          <SafeAreaView style={{ marginLeft: 10 }}>
            <Text style={{ color: '#187B63', fontSize: 13 }}>Aluno</Text>
            <Text style={{ color: '#303437', fontSize: 21 }}>{USER_FULL_NAME}</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            width: 78,
            height: 39,
            backgroundColor: '#187B63',
            borderRadius: 100,
            right: -20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFF',
              fontSize: 18,
            }}>
            Treino
          </Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 12,
          width: '100%',
          gap: 10,
          alignItems: 'center',
          backgroundColor: 'white',
        }}></SafeAreaView>
      <CommandBar goto={Navigate} />
    </SafeAreaView>
  );
}
