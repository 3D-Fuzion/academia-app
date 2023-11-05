import { SafeAreaView, ScrollView } from "react-native";
import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import ExerciceContainer from '../components/ExerciceContainer';
import api from '../services/Api'
import SideModal from '../components/SideModal'
import LoadingIcon from '../assets/status/loading'

export default function Training({ navigation, route }) {
  const [menuModal, setMenuModal] = useState(false);
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    function LoadTrainings() {
      api.get(`/training?category=${route.params.title}&userid=${1}`)
        .then((res) => {
          setTrainings(res.data)
        })
    }
    LoadTrainings();
  }, [""])

  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
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
          <SideModal style={{ display: "none" }} visible={menuModal} method={SwitchModal} goto={Navigate} />
        </SafeAreaView>
        <TopBar style={{ flex: 10 }} screenTitle={"recorde"} method={SwitchModal} variable={menuModal}></TopBar>
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
          {route.params.title}
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
        {trainings.length === 0 ? <SafeAreaView><LoadingIcon /></SafeAreaView> :
          <SafeAreaView style={{ marginTop: 30, width: "90%" }}>
            <ScrollView>
              {
                trainings.map((training) => <ExerciceContainer title={training.name} weight={training.weight} key={training.id} id={training.id} />)
              }
            </ScrollView>
          </SafeAreaView>
        }
      </SafeAreaView>
    </SafeAreaView>
  );
}
