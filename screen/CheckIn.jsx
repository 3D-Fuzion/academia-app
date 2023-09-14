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
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import ScreenTitle from '../assets/screen_titles/checkin';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import {transform} from 'typescript';
import {TouchableOpacity} from 'react-native';
import CommandBar from '../components/CommandBar';
export default function CheckIn() {
  const [menuModal, setMenuModal] = useState(false);
  let menu;
  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
      console.log('Modal aberto');
    } else {
      setMenuModal(false);
      console.log('Modal fechado');
    }
  }

  if (menuModal) {
    menu = (
      <TouchableOpacity onPress={SwitchModal}>
        <SafeAreaView
          style={{
            borderWidth: 8,
            borderColor: '#1A4239',
            borderRadius: 10,
            backgroundColor: '#1A4239',
          }}>
          <Menu width={35} height={35} />
        </SafeAreaView>
      </TouchableOpacity>
    );
  } else {
    menu = (
      <TouchableOpacity onPress={SwitchModal}>
        <SafeAreaView>
          <Menu width={35} height={35} />
        </SafeAreaView>
      </TouchableOpacity>
    );
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
                <Atletas width={35} height={35} />
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
        <SafeAreaView
          style={{
            flex: 2,
            width: '100%',
            alignItems: 'center',
          }}>
          <SafeAreaView style={{alignSelf: 'flex-start', marginLeft: 30}}>
            <ScreenTitle width={80} height={80} />
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
          <Sino width={35} height={35} />
          <SafeAreaView
            style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
            {menu}
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 12,
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#ECECEC',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SafeAreaView
            style={{
              height: 52,
              width: 104,
              transform: [{translateX: -120}],
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 18,
                color: '#187B63',
              }}>
              Dia
            </Text>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 25,
                color: '#303437',
              }}>
              Quinta
            </Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              height: 52,
              width: 104,
              backgroundColor: '#187B63',
              borderRadius: 50,
              position: 'absolute',
              margin: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                color: 'white',
              }}>
              01/09
            </Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            flex: 6,
            backgroundColor: 'white',
            width: '100%',
          }}></SafeAreaView>
      </SafeAreaView>
      <CommandBar />
    </SafeAreaView>
  );
}
