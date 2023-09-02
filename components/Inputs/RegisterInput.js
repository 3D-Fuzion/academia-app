import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function RegisterInput({name, method}) {
  function TriggerMethod() {
    method();
  }

  return (
    <TextInput
      onFocus={TriggerMethod}
      placeholder={name}
      style={{
        textAlign: 'center',
        height: 70,
        fontSize: 18,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#D8D8D8',
      }}
    />
  );
}

export function RegisterInputCode(props) {
  return (
    <TextInput
      placeholder={props.name}
      style={{
        textAlign: 'center',
        height: 70,
        fontSize: 18,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#187B63',
        backgroundColor: '#D8D8D8',
      }}
    />
  );
}
