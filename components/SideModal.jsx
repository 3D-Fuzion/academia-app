import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import { TouchableOpacity } from 'react-native';
import { Modal, SafeAreaView, Text } from 'react-native'
export default function SideModal({ visible, method, goto }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    }}>
      <Modal
        style={{ backgroundColor: 'green' }}
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          () => method();
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
          <TouchableOpacity onPress={() => goto("CheckIn")}>
            <SafeAreaView
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <CheckInIcon width={35} height={35} />
              <Text style={{ marginLeft: 30, color: 'white', fontSize: 30 }}>
                Check-in
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

          <TouchableOpacity onPress={() => goto("Record")}>
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

          <TouchableOpacity onPress={() => { method() }}>
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


    </SafeAreaView>
  )
}
