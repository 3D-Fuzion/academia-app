import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import Sino from '../assets/sino';
import Menu from '../assets/menu';

import TreinoDoDia from '../assets/screen_titles/treinododia';
import Atletas from '../assets/screen_titles/atletas';
import Payment from '../assets/screen_titles/fatura';
import Feed from '../assets/screen_titles/logo';
import Calendario from '../assets/screen_titles/calendario';
import Recorde from '../assets/screen_titles/recorde';
import Perfil from '../assets/screen_titles/perfil';
export default function TopBar({method, variable, screenTitle}) {
  let title;
  function TriggerMethod() {
    method();
  }
  if (screenTitle == 'treinododia') {
    title = <TreinoDoDia width={150} height={150} />;
  } else if (screenTitle == 'atletas') {
    title = <Atletas width={80} height={80} />;
  } else if (screenTitle == 'pagamento') {
    title = <Payment width={80} height={80} />;
  } else if (screenTitle == 'feed') {
    title = <Feed width={150} height={150} />;
  } else if (screenTitle == 'calendario') {
    title = <Calendario width={105} height={150} />;
  } else if (screenTitle == 'recorde') {
    title = <Recorde width={180} height={150} />;
  } else if (screenTitle == 'perfil') {
    title = <Perfil width={105} height={105} />;
  } 
 

  return (
    <>
      <SafeAreaView
        style={{
          flex: 2,
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <SafeAreaView
          style={{
            alignSelf: 'flex-start',
            marginLeft: 30,
          }}>
          {title}
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}>
        <Sino width={32} height={32} />
        <SafeAreaView
          style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
          {variable ? (
            <TouchableOpacity onPress={TriggerMethod}>
              <SafeAreaView
                style={{
                  borderWidth: 7,
                  borderColor: '#1A4239',
                  borderRadius: 10,
                  backgroundColor: '#1A4239',
                }}>
                <Menu width={24} height={22} />
              </SafeAreaView>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={TriggerMethod}>
              <SafeAreaView>
                <Menu width={24} height={22} />
              </SafeAreaView>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}
