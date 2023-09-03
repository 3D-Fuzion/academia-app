import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Modal} from 'react-native';
import {useState} from 'react';

import Calendario from '../assets/menu/calendario';
import AtletasIcon from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';

import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';

import {TouchableOpacity} from 'react-native';
import CommandBar from '../components/CommandBar';
import TopBar from '../components/TopBar';
export default function Feed() {
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
        <Modal
          style={{backgroundColor: 'green'}}
          animationType="fade"
          transparent={true}
          visible={menuModal}
          onRequestClose={() => {
            setMenuModal(!menuModal);
          }}>
          <SafeAreaView
            style={{
              alignSelf: 'flex-end',
              flex: 1,
              backgroundColor: '#187B63',
              marginTop: 55,
              paddingLeft: 20,
              paddingTop: 50,
              gap: 20,
              marginBottom: 55,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
              width: '85%',
            }}>
            <TouchableOpacity>
              <SafeAreaView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <CheckInIcon width={35} height={35} />
                <Text style={{marginLeft: 30, color: 'white', fontSize: 30}}>
                  Check List
                </Text>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
              <SafeAreaView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Calendario width={35} height={35} />
                <Text style={{marginLeft: 30, color: 'white', fontSize: 30}}>
                  Calendário
                </Text>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
              <SafeAreaView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Recorde width={35} height={35} />
                <Text style={{marginLeft: 30, color: 'white', fontSize: 30}}>
                  Recorde Pessoal
                </Text>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
              <SafeAreaView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <AtletasIcon width={35} height={35} />
                <Text style={{marginLeft: 30, color: 'white', fontSize: 30}}>
                  Atletas
                </Text>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
              <SafeAreaView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Pagamento width={35} height={35} />
                <Text style={{marginLeft: 30, color: 'white', fontSize: 30}}>
                  Pagamentos
                </Text>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity onPress={SwitchModal}>
              <SafeAreaView
                style={{
                  marginTop: 50,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Sair width={35} height={35} />
                <Text style={{marginLeft: 30, color: 'white', fontSize: 30}}>
                  Sair
                </Text>
              </SafeAreaView>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
        <TopBar
          method={SwitchModal}
          variable={menuModal}
          screenTitle={'feed'}></TopBar>
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