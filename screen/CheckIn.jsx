import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Modal, Alert} from 'react-native';
import {useEffect, useState} from 'react';
import Sino from '../assets/sino';
import Menu from '../assets/menu';
import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import ScreenTitle from '../assets/screen_titles/checkin';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import {TouchableOpacity} from 'react-native';
import CommandBar from '../components/CommandBar';
import {ScrollView} from 'react-native';
import CheckInContainer from '../components/Containers/CheckInContainer';
import api from '../services/Api';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CheckIn() {
  const [menuModal, setMenuModal] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [userid, setUserId] = useState('');
  const [intervalDate, setIntervalDate] = useState(new Date());
  const [intervalDateModal, setIntervalDateModal] = useState(false);
  let menu;

  const formatter = new Intl.DateTimeFormat('pt-BR', {weekday: 'long'});

  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
    }
  }

  useEffect(() => {
    GetLesson();
  }, [intervalDate]);

  useEffect(() => {
    setIntervalDate(new Date(Date.now()));
    async function GetUserId() {
      const id = await AsyncStorage.getItem('id');
      setUserId(id);
    }
    GetUserId();
  }, ['']);

  useEffect(() => {
    GetLesson();
  }, ['']);

  function FormatDateToHour(date) {
    const parseDate = new Date(date);
    const parseDateOneHour = new Date(date);
    parseDateOneHour.setHours(parseDateOneHour.getHours() + 1);
    return (
      parseDate.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }) +
      ' - ' +
      parseDateOneHour.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    );
  }

  function GetLesson() {
    const dateParts = intervalDate.toLocaleString().split(',')[0].split('/');

    for (var i = 0; i < dateParts.length; i++) {
      if (dateParts[i].length < 2) {
        dateParts[i] = '0' + dateParts[i];
      }
    }

    const year = dateParts[2];
    const month = dateParts[0];
    const day = dateParts[1];

    const transformedDate = `${year}-${month}-${day}`;

    console.log(transformedDate);

    api
      .get('/lesson', {params: {date: transformedDate}})
      .then(res => {
        setLessons(res.data);
      })
      .catch(err => {
        Alert.alert('Ocorreu um erro', err.response.message);
      });
  }

  function CheckInVerification(id) {
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

  function CheckIn(id) {
    api
      .patch('/lesson/checkin', {
        lessonid: id,
        id: userid,
      })
      .then(res => {
        if (res.status === 200) {
          Alert.alert('Sucesso', 'CheckIn realizado!');
          GetLesson();
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
        <DatePicker
          modal
          locale="pt-BR"
          open={intervalDateModal}
          mode={'date'}
          date={intervalDate}
          onConfirm={date => {
            setIntervalDateModal(false);
            setIntervalDate(date);
          }}
          onCancel={() => {
            setIntervalDateModal(false);
          }}
        />
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
              {formatter.format(intervalDate).charAt(0).toUpperCase() +
                formatter.format(intervalDate).slice(1).split('-')[0].trim()}
            </Text>
          </SafeAreaView>
          <TouchableOpacity
            onPress={() => {
              setIntervalDateModal(true);
            }}
            style={{
              height: 52,
              width: 104,
              backgroundColor: '#187B63',
              borderRadius: 50,
              position: 'absolute',
            }}>
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
                {new Date(intervalDate)
                  .toLocaleDateString('pt-BR', {
                    month: 'numeric',
                    day: 'numeric',
                  })
                  .toString()}
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView
          style={{
            flex: 6,
            backgroundColor: 'white',
            width: '100%',
          }}>
          <SafeAreaView
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView style={{marginTop: 20}}>
              {lessons.map(lesson => {
                return (
                  <CheckInContainer
                    date={FormatDateToHour(lesson.startTime)}
                    method={CheckInVerification}
                    id={lesson.id}
                    vacancy={lesson.vacancy}
                    maxVacancy={lesson.maxVacancy}
                    professor={lesson.professorName}
                    title={lesson.title}
                    key={lesson.id}
                  />
                );
              })}
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <CommandBar />
    </SafeAreaView>
  );
}
