import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Modal} from 'react-native';
import {useState} from 'react';

import Calendario from '../assets/menu/calendario';
import AtletasIcon from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';

import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import SideModal from '../components/SideModal'

import {TouchableOpacity} from 'react-native';
import CommandBar from '../components/CommandBar';
import TopBar from '../components/TopBar';
export default function Feed({ navigation }) {
  const [menuModal, setMenuModal] = useState(false);
  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
      console.log('Modal aberto');
    } else {
      setMenuModal(false);
      console.log('Modal fechado');
    }
  }

  function Navigate(name) {
    navigation.navigate(name); 
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
          <SideModal style={{ display: "none" }} visible={menuModal} method={SwitchModal} goto={Navigate}/>
        </SafeAreaView>
        <TopBar style={{flex:10}}screenTitle={"feed"} method={SwitchModal} variable={menuModal}></TopBar>
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
          <SafeAreaView style={{marginLeft: 10}}>
            <Text style={{color: '#187B63', fontSize: 13}}>Coach</Text>
            <Text style={{color: '#303437', fontSize: 21}}>Junior Oliver</Text>
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
      <CommandBar />
    </SafeAreaView>
  );
}
