import { Text, SafeAreaView, TouchableOpacity, Modal, TextInput} from 'react-native'
import { useState } from 'react'
import Api from "../services/Api"
export default function ExerciceContainer({ title, weight }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState(""); 

  function EditRecord() { 
    Api.put("/training", {trainingid: })
    .then((res) => {
      if(res.status === 200){ 
        console.log("Recorde Alterado");
      }
    }).catch(err => { 
      console.log("Aconteceu um erro:" +err);
    }); 
    //TODO EDICAO DE RECORD
  }

  return (
    <SafeAreaView style={{
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#187B63",
      borderRadius: 5,
      marginBottom: 10,
      flexDirection: "row"
    }}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style=
        {{
          flex:1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(000,000,00", 
        }}>
        <SafeAreaView style=
        {{
          backgroundColor: "#187B63",
          padding: 30, 
          borderRadius: 10,
          elevation: 10,
          borderWidth: 5,
          borderColor: "white",
          minWidth: "60%",
          minHeigth: "30%"
        }}>
        <SafeAreaView>
          <Text style=
          {{
            textAlign: "center",
            fontSize: 24,
            color: "white",
            marginBottom: 40
          }}>
            Digite o seu novo recorde
          </Text>          
        </SafeAreaView>
        <SafeAreaView>
          <TextInput 
          onChangeText={text => setRecord(text)}
          style=
          {{
            backgroundColor:"white", 
            borderRadius: 5, 
            padding: 10
          }}/>
        </SafeAreaView>
          <SafeAreaView style={{flexDirection: "row", gap: 30, justifyContent: "center"}}>
          <TouchableOpacity 
          onPress={setModalVisible(!modalVisible)}
          style=
          {{
            marginTop: 20,
            flex: 1, 
            width:100, 
            height:50,
            justifyContent: "center",
            alignItems: "center", 
            borderRadius: 5, 
            backgroundColor: "red"
          }}>
            <Text style=
            {{
              fontSize: 20,
              color: "white"
            }}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={EditRecord()}
          style=
          {{
            marginTop: 20,
            flex: 1, 
            width:100, 
            height:50,
            justifyContent: "center",
            alignItems: "center", 
            borderRadius: 5, 
            backgroundColor: "#00ff00"
          }}>
            <Text style=
            {{
              fontSize: 20,
              color: "white"
            }}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>
        </SafeAreaView>
        
        </SafeAreaView>
      </Modal>
      <SafeAreaView style={{ flex: 3 }}>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          lineHeight: 21.78,
          color: "white",
        }}>
          {title}
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1, height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
        <TouchableOpacity 
        onPress={() => setModalVisible(!modalVisible)}
        style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 5 }}>
          <Text style={{
            fontSize: 18,
            lineHeight: 21.78,
            color: "black",
          }}>
            {!weight ? "0" : weight}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}
