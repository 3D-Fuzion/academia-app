/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Intro() {
  return (
    <SafeAreaView style={{width: '100%', height: '100%', alignItems: 'center'}}>
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
          marginTop: 50,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'gray',
            marginBottom: 60,
          }}></View>

        <Text style={{fontSize: 20, color: 'green', marginBottom: 50}}>
          Bem vindo!
        </Text>
        <TouchableOpacity
          style={{
            padding: 20,
            width: 250,
            fontSize: 20,
            color: 'green',
            borderWidth: 5,
            borderColor: 'green',
            borderRadius: 50,
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'gray',
              textAlign: 'center',
            }}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 20,
            width: 250,
            fontSize: 20,
            borderWidth: 5,
            backgroundColor: 'green',
            borderColor: 'green',
            borderRadius: 50,
            margin: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'rgb(255,255,255)',
              textAlign: 'center',
            }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
