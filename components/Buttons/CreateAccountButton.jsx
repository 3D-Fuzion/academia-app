import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function CreateAccountButton({createMethod}) { 
return ( 
 <TouchableOpacity
      onPress={() => {createMethod()}}
      style={{
        height: 54,
        width: 225,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 100,
        backgroundColor: '#ECECEC',
      }}>
      <Text
        style={{ 
          textAlign: 'center',
          width: '100%',
          marginLeft: 30,
          marginRight: 30,
          color: '#A4A4A4',
          fontSize: 22,
        }}>
        Cadastre-se
      </Text>
    </TouchableOpacity>

);
}

