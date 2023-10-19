import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Image, Modal} from 'react-native';
import {useState} from 'react';

import Perfil from '../assets/screen_titles/perfil';

import Sino from '../assets/sino';
import Menu from '../assets/menu';
import Coracao from '../assets/coracao';
import Estrela from '../assets/estrela';
import Check from '../assets/check';
import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckIn from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import {transform} from 'typescript';
import {TouchableOpacity} from 'react-native';
import CommandBar from '../components/CommandBar';
import EditModal from '../components/EditModal';
import SideModal from '../components/SideModal';
import TopBar from '../components/TopBar';
import EditProfile from '../assets/editprofile';

export default function Profile({navigation}) {
  const [menuModal, setMenuModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  function SwitchMenuModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
    }
  }

  function SwitchEditModal() {
    if (editModal === false) {
      setEditModal(true);
    } else {
      setEditModal(false);
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
          <SideModal
            style={{display: 'none'}}
            visible={menuModal}
            method={SwitchMenuModal}
            goto={Navigate}
          />
        </SafeAreaView>
        <TopBar
          style={{flex: 10}}
          screenTitle={'perfil'}
          method={SwitchMenuModal}
          variable={menuModal}
        />
      </SafeAreaView>
      <EditModal visible={editModal} method={SwitchEditModal} />
      <SafeAreaView
        style={{
          flex: 12,
          width: '100%',
          alignItems: 'center',
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#D8D8D8',
          }}>
          <SafeAreaView
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
            }}>
            <SafeAreaView
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SafeAreaView
                style={{
                  width: '85%',
                  height: 80,
                  flexDirection: 'row',
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  backgroundColor: '#187B63',
                }}>
                <SafeAreaView
                  style={{
                    borderWidth: 5,
                    padding: 5,
                    backgroundColor: 'white',
                    borderColor: '#D8D8D8',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{translateX: -0}],
                  }}>
                  <Estrela width={25} height={25} />
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    width: 80,
                    marginRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 24}}>100</Text>
                  <Text style={{color: 'white'}}>Strikes</Text>
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      borderWidth: 5,
                      borderColor: '#D8D8D8',
                      borderRadius: 100,
                      backgroundColor: 'white',
                      width: 120,
                      height: 120,
                    }}
                  />
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    width: 80,
                    marginLeft: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 24}}>99</Text>
                  <Text style={{color: 'white'}}>Curtidas</Text>
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    borderWidth: 5,
                    padding: 5,
                    backgroundColor: 'white',
                    borderColor: '#D8D8D8',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{translateX: +0}],
                  }}>
                  <Coracao width={25} height={25} />
                </SafeAreaView>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView
              style={{
                position: 'absolute',
                transform: [{translateX: -150}, {translateY: 165}],
              }}>
              <TouchableOpacity onPress={() => SwitchEditModal()}>
                <EditProfile />
              </TouchableOpacity>
            </SafeAreaView>
            <Text style={{marginTop: 30}}>Aluno</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              Nome do Aluno
            </Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            flex: 2,
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#ECECEC ',
          }}></SafeAreaView>
      </SafeAreaView>
      <CommandBar />
    </SafeAreaView>
  );
}
