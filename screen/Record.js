import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Image} from 'react-native';
import Sino from '../assets/sino';
import Menu from '../assets/menu';
import Coracao from '../assets/coracao';
import Estrela from '../assets/estrela';
import {transform} from 'typescript';
export default function Record() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#A8A8A8',
        }}>
        <SafeAreaView
          style={{
            flex: 2,
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#A8A8A8',
          }}>
          <Text>Logo</Text>
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
          <Menu width={35} height={35} />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 12,
          width: '100%',
          alignItems: 'center',
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#D8D8D8',
          }}>
          <SafeAreaView
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
            }}>
            <SafeAreaView
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SafeAreaView
                style={{
                  width: '85%',
                  height: 80,
                  flexDirection: 'row',
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  backgroundColor: '#187B63',
                }}>
                <SafeAreaView
                  style={{
                    borderWidth: 5,
                    padding: 5,
                    backgroundColor: 'white',
                    borderColor: '#D8D8D8',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{translateX: -0}],
                  }}>
                  <Estrela width={25} height={25} />
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    width: 80,
                    marginRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 24}}>100</Text>
                  <Text style={{color: 'white'}}>Strikes</Text>
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      borderWidth: 5,
                      borderColor: '#D8D8D8',
                      borderRadius: 100,
                      backgroundColor: 'white',
                      width: 120,
                      height: 120,
                    }}
                  />
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    width: 80,
                    marginLeft: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 24}}>99</Text>
                  <Text style={{color: 'white'}}>Curtidas</Text>
                </SafeAreaView>
                <SafeAreaView
                  style={{
                    borderWidth: 5,
                    padding: 5,
                    backgroundColor: 'white',
                    borderColor: '#D8D8D8',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{translateX: +0}],
                  }}>
                  <Coracao width={25} height={25} />
                </SafeAreaView>
              </SafeAreaView>
            </SafeAreaView>
            <Text style={{marginTop: 30}}>Aluno</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              Nome do Aluno
            </Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            flex: 2,
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#ECECEC ',
          }}></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
