import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Sino from '../assets/sino';
import Menu from '../assets/menu';
import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import {transform} from 'typescript';
import CommandBar from '../components/CommandBar';

import ScreenTitle from '../assets/screen_titles/recorde';

export default function TopBar({method, variable}) {
  function TriggerMethod() {
    method();
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
          <ScreenTitle width={150} height={150} />
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
