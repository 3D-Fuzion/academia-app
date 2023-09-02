import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Image, Modal} from 'react-native';
import {useState} from 'react';

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
export default function Record() {
  const [menuModal, setMenuModal] = useState(true);
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
          backgroundColor: '#A8A8A8',
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
                <CheckIn width={35} height={35} />
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
            backgroundColor: '#A8A8A8',
          }}>
          <Text>Logo</Text>
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
