import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginButton({ method }) {
  return (
    <TouchableOpacity
      onPress={() => { method() }}
      style={{
        height: 54,
        width: 225,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 100,
        backgroundColor: '#187B63',
      }}>
      <Text
        style={{
          textAlign: 'center',
          width: '100%',
          marginLeft: 30,
          marginRight: 30,
          color: 'white',
          fontSize: 24,
        }}>
        Entrar
      </Text>
    </TouchableOpacity>
  );
}
