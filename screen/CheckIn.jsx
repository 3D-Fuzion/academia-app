import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Modal, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Sino from '../assets/sino';
import Menu from '../assets/menu';
import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import ScreenTitle from '../assets/screen_titles/checkin';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import { TouchableOpacity } from 'react-native';
import CommandBar from '../components/CommandBar';
import { ScrollView } from 'react-native';
import CheckInContainer from '../components/Containers/CheckInContainer';
import api from '../services/Api';
import DatePicker from 'react-native-date-picker';
import SideModal from '../components/SideModal';
export default function CheckIn({ navigation }) {
  const [menuModal, setMenuModal] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [intervalDate, setIntervalDate] = useState(new Date());
  const [intervalDateModal, setIntervalDateModal] = useState(false);
  let menu;

  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' });

  useEffect(() => {
    GetLesson();
  }, [intervalDate]);

  useEffect(() => {
    GetLesson();
  }, ['']);

  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
    }
  }

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
      .get('/lesson', { params: { date: transformedDate } })
      .then(res => {
        setLessons(res.data);
      })
      .catch(err => {
        Alert.alert('Ocorreu um erro', err.response.message);
      });
  }

  function OpenLesson(id) {
    navigation.navigate("Lesson", { id: id })
    console.log(id);
  }

  function Navigate(name) {
    navigation.navigate(name);
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
        <SafeAreaView>
          <SideModal style={{ display: "none" }} visible={menuModal} method={SwitchModal} goto={Navigate} />
        </SafeAreaView>
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
              transform: [{ translateX: -120 }],
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
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={{ marginTop: 20 }}>
              {lessons.map(lesson => {
                return (
                  <CheckInContainer
                    date={FormatDateToHour(lesson.startTime)}
                    method={OpenLesson}
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
      <CommandBar goto={Navigate} />
    </SafeAreaView>
  );
}
