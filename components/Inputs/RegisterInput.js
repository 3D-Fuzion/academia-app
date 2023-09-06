import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function RegisterInput({name, method}) {
  return (
    <TextInput
      placeholder={name}
      style={{
        textAlign: 'center',
        height: 60,
        fontSize: 18,
        width: 230,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#D8D8D8',
      }}
      maxLength={128}
    />
  );
}

export function RegisterInputCode({name, method}) {
  function RefreshValue(value) {
    method(value);
  }

  return (
    <TextInput
      placeholder={name}
      style={{
        textAlign: 'center',
        height: 60,
        fontSize: 18,
        width: 230,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#187B63',
        backgroundColor: '#D8D8D8',
      }}
      maxLength={8}
      onChangeText={text => RefreshValue(text)}
    />
  );
}
