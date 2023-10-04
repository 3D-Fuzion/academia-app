import { Modal, SafeAreaView, Text, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native';
export default function NameEditModal({ visible, method, goto }) {
  return (
    <Modal
      style={{ backgroundColor: 'green', alignItems: "center"}}
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        () => method();
      }}>
      <SafeAreaView style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"}}>
        <SafeAreaView style={{alignItems: "center", backgroundColor: "white", width: 250, height: 200, borderRadius: 10, elevation: 10}}>
          <TouchableOpacity
            style={{alignSelf: "flex-end"}}
          onPress={() => method()}>
            <SafeAreaView style={{width: 25, height: 25, borderRadius: 10, backgroundColor: "#E0115F", marginRight: 10, marginTop: 10}}>
            </SafeAreaView> 
          </TouchableOpacity>
          <Text style={{fontSize: 16}}>Digite o seu nome</Text>
          <TextInput style={{maxWidth: "80%", minWidth: "80%", backgroundColor: "#ECECEC", borderRadius: 10, marginTop: 20}}/>
          <TouchableOpacity style={{alignSelf: "center"}}> 
            <SafeAreaView style={{
              minWidth: "80%", 
              height: 35, 
              borderRadius: 10, 
              backgroundColor: "#187B63",
              marginTop: 20, 
              alignItems: "center", 
              justifyContent: "center"
            }}>
              <Text style={{color: "white", fontSize: 16}}>
                Salvar
              </Text> 
            </SafeAreaView> 
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>

    </Modal >
  );
} 
