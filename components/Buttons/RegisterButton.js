import {TextInput, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function RegisterButton() {
  return (
    <TouchableOpacity
      style={{
        height: 70,
        width: '100%',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 100,
        backgroundColor: '#187B63',
      }}>
      <Text style={{width: '100%', color: 'white', fontSize: 24}}>
        Se cadastrar
      </Text>
    </TouchableOpacity>
  );
}
