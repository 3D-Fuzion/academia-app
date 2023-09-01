import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';

export default function Home() {
  const [menuModal, setMenuModal] = useState(true);

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
        justifyContent: 'center',
      }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuModal}
        onRequestClose={() => {
          setMenuModal(!menuModal);
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text>Modal</Text>
        </View>
      </Modal>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '8%',
          backgroundColor: 'gray',
        }}>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            flex: 3,
            backgroundColor: 'blue',
          }}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              borderWidth: 1,
              borderRadius: 100,
            }}></SafeAreaView>
          <SafeAreaView
            style={{
              flex: 3,
              backgroundColor: 'orange',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
              }}>
              Pessoa
            </Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'green',
          }}>
          <TouchableOpacity
            onPress={SwitchModal}
            style={{width: '100%', height: '100%'}}></TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
