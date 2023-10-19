import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Modal, Image} from 'react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';

export default function Home() {
  const [menuModal, setMenuModal] = useState(false);

  function SwitchModal() {
    if (menuModal === false) {
      setMenuModal(true);
    } else {
      setMenuModal(false);
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
        animationType="slide"
        transparent={true}
        visible={menuModal}
        onRequestClose={() => {
          setMenuModal(!menuModal);
        }}>
        <View
          style={{
            width: 300,
            height: 450,
            transform: [{translateY: 180}],
            alignSelf: 'center',
            backgroundColor: '#187B63',
            elevation: 20,
            shadowColor: '#171717',
            borderRadius: 10,
            padding: 10,
            gap: 1,
          }}>
          <TouchableOpacity style={{flex: 1}}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>
              Perfil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>
              CheckIn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>
              Treino do Dia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>
              Calendario
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                color: 'white',
              }}>
              Recorde Pessoal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>
              Atletas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>
              Pagamento
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMenuModal(false)}
            style={{flex: 1}}>
            <Text style={{textAlign: 'center', fontSize: 40, color: 'white'}}>
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View
        style={{
          flex: 1,
          backgroundColor: '#D8D8D8',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={require('../assets/person.png')}
              style={{width: 80, height: 80}}
            />
          </View>
          <Text style={{textAlign: 'center', flex: 1, fontSize: 24}}>Nome</Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#A8A8A8',
            }}>
            <Text style={{textAlign: 'center'}}>Icone1</Text>
            <TouchableOpacity
              style={{backgroundColor: 'red'}}
              onPressIn={SwitchModal}>
              <Text style={{textAlign: 'center'}}>Icone2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{flex: 9, height: '100%', backgroundColor: '#ECECEC'}}></View>
    </SafeAreaView>
  );
}
