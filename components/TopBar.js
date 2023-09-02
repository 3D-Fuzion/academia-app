import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import Sino from '../assets/sino';
import Menu from '../assets/menu';

import TreinoDoDia from '../assets/screen_titles/treinododia';
import Atletas from '../assets/screen_titles/atletas';
export default function TopBar({method, variable, screenTitle}) {
  let title;
  function TriggerMethod() {
    method();
  }
  if (screenTitle == 'treinododia') {
    title = <TreinoDoDia width={150} height={150} />;
  } else if (screenTitle == 'atletas') {
    title = <Atletas width={80} height={80} />;
  }
  return (
    <>
      <SafeAreaView
        style={{
          flex: 2,
          width: '100%',
          alignItems: 'center',
        }}>
        <SafeAreaView style={{alignSelf: 'flex-start', marginLeft: 30}}>
          {title}
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}>
        <Sino width={35} height={35} />
        <SafeAreaView
          style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
          {variable ? (
            <TouchableOpacity onPress={TriggerMethod}>
              <SafeAreaView
                style={{
                  borderWidth: 8,
                  borderColor: '#1A4239',
                  borderRadius: 10,
                  backgroundColor: '#1A4239',
                }}>
                <Menu width={35} height={35} />
              </SafeAreaView>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={TriggerMethod}>
              <SafeAreaView>
                <Menu width={35} height={35} />
              </SafeAreaView>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}
