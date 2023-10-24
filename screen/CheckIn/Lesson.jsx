import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Modal, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Sino from '../../assets/sino';
import Menu from '../../assets/menu';
import Calendario from '../../assets/menu/calendario';
import Atletas from '../../assets/menu/atletas';
import CheckInIcon from '../../assets/menu/checkin';
import Pagamento from '../../assets/menu/pagamento';
import ScreenTitle from '../../assets/screen_titles/checkin';
import Recorde from '../../assets/menu/recorde';
import Sair from '../../assets/menu/sair';
import { TouchableOpacity } from 'react-native';
import CommandBar from '../../components/CommandBar';
import { ScrollView } from 'react-native';
import api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckInStudentContainer from '../../components/Containers/CheckInStudentContainer';
export default function Lesson({ route }) {
  const [menuModal, setMenuModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [userid, setUserId] = useState('');
  let menu;
  const { id } = route.params;

  useEffect(() => {
    async function GetUserId() {
      const id = await AsyncStorage.getItem('id');
      setUserId(id);
    }
    GetUserId();
  }, ['']);

  function ShowCheckInWindow() {
    Alert.alert('Confirmacao de CheckIn', 'Deseja fazer CheckIn?', [
      {
        text: 'Sim',
        onPress: () => {
          CheckIn(id);
        },
      },
      {
        text: 'Cancelar',
      },
    ]);
  }

  useEffect(() => {
    GetData()
  }, [''])

  function GetData() {
    api
      .get('/lesson/' + id + '/student')
      .then(res => {
        setStudents(res.data);
      })
      .catch(err => {
        Alert.alert('Ocorreu um erro', err.response.message);
      });

    console.log(students);
  }

  function CheckIn(id) {
    api
      .patch('/lesson/checkin', {
        lessonid: id,
        id: userid,
      })
      .then(res => {
        if (res.status === 200) {
          Alert.alert('Sucesso', 'CheckIn realizado!');
        }
      })
      .catch(err => {
        if (err.response.status === 409) {
          Alert.alert('Ocorreu um erro', 'Voce ja fez checkin');
        } else {
          Alert.alert('Ocorreu um erro', err);
        }
      });
  }

  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
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
        <Modal style={{ backgroundColor: 'green' }}
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
                <Text style={{ marginLeft: 30, color: 'white', fontSize: 30 }}>
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
                <Text style={{ marginLeft: 30, color: 'white', fontSize: 30 }}>
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
                <Text style={{ marginLeft: 30, color: 'white', fontSize: 30 }}>
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
                <Text style={{ marginLeft: 30, color: 'white', fontSize: 30 }}>
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
                <Text style={{ marginLeft: 30, color: 'white', fontSize: 30 }}>
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
                <Text style={{ marginLeft: 30, color: 'white', fontSize: 30 }}>
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
          <SafeAreaView style={{ alignSelf: 'flex-start', marginLeft: 30 }}>
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
            style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
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
        <SafeAreaView style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => { ShowCheckInWindow() }}
            style={{
              width: 150,
              height: 39,
              backgroundColor: "#1A4239",
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Text style={{ fontSize: 18, fontWeight: 300, color: "white" }}>Fazer check-in</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView>
          <ScrollView style={{ marginTop: 30 }}>
            {students.map(student => {
              return (
                <CheckInStudentContainer name={student.name} />
              )
            })}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
      <CommandBar />
    </SafeAreaView>
  )
}
