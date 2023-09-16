import { SafeAreaView, ScrollView } from "react-native";
import { Text, Modal } from 'react-native';
import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { useRoute } from "@react-navigation/native";
import ExerciceContainer from '../components/ExerciceContainer';
import api from '../services/Api'
import SideModal from '../components/SideModal'
import LoadingIcon from '../assets/status/loading'
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
        <TopBar style={{flex:10}}screenTitle={"recorde"} method={SwitchModal} variable={menuModal}></TopBar>
      </SafeAreaView>
      <SafeAreaView style={{
        height: 84,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
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
        {trainings.length === 0 ? <SafeAreaView><LoadingIcon/></SafeAreaView> :
          <SafeAreaView style={{ marginTop: 30, width: "90%" }}>
            <ScrollView style={{ showVerticalScrollIndicator: false }}>
              {
                trainings.map((training) => <ExerciceContainer title={training.name} weight={training.weight} key={training.id} />)
              }
            </ScrollView>
          </SafeAreaView>
        }
      </SafeAreaView>
    </SafeAreaView>
  );
}
