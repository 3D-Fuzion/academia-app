import { SafeAreaView, ScrollView} from "react-native";
import { Text, Modal } from 'react-native';
import { useState, useEffect} from 'react';
import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import { TouchableOpacity } from 'react-native';
import CommandBar from '../components/CommandBar';
import TopBar from '../components/TopBar';
import TrainingTitle from "../components/TrainingTitle";
import { useRoute } from "@react-navigation/native";
import ExerciceContainer from '../components/ExerciceContainer'; 
import api from '../services/Api'
export default function Training({ navigation }) {
  const { params } = useRoute();
  const [menuModal, setMenuModal] = useState(false);
  const [trainings, setTrainings] = useState([]); 

  useEffect(() => {
    LoadTrainings(); 
  }, []) 

  function LoadTrainings() {
    api.get("/training?category=" + params.title)
      .then((res) => {
        setTrainings(res.data)
      })
  } 

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
          style={{ backgroundColor: 'green' }}
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
        <TopBar screenTitle={"recorde"} method={SwitchModal} variable={menuModal}></TopBar>
      </SafeAreaView>
      <SafeAreaView style={{
        height: 84,
        width: "100%",
        justifyContent:"center", 
        alignItems:"center",
        backgroundColor: "#187B63"
      }}>
        <Text style={{
          fontSize: 32,
          fontWeight: 300,
          color: "white"
        }}>
          {params.title}
        </Text>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 12,
          width: '100%',
          justifyContent: "center",
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
<SafeAreaView style={{marginTop: 30, width:"90%"}}>
<ScrollView style={{showVerticalScrollIndicator: false}}>
{
  trainings.map((training) => <ExerciceContainer title={training.name} weight={training.weight} key={training.id}/>)
}
</ScrollView>
</SafeAreaView>
          </SafeAreaView>
      <CommandBar />
    </SafeAreaView>
  );
}
