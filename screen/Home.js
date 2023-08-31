import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}>
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
            backgroundColor: 'red',
          }}></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
