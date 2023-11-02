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
export default function Calendar() {
  const [menuModal, setMenuModal] = useState(false);
  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
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
          screenTitle={'calendario'}></TopBar>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 84,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ECECEC',
        }}>
        <SafeAreaView
          style={{
            width: 188,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            left: 31,
          }}>
          <Text style={{fontSize: 13, fontWeight: 400}}>Mês</Text>
          <Text style={{fontSize: 21, fontWeight: 500}}>
            Agosto <Text style={{fontSize: 21, color: '#187B63'}}>/ 2023</Text>
          </Text>
        </SafeAreaView>
        <SafeAreaView
          style={{
            width: 172,
            height: 84,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: '#187B63',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SafeAreaView
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 500,
              }}>
              Total de check-in
            </Text>
            <Text
              style={{
                fontSize: 34,
                fontWeight: 600,
                color: '#ECECEC',
              }}>
              0
            </Text>
          </SafeAreaView>
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
