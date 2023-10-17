import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

export default function CheckInContainer({
  date,
  vacancy,
  maxVacancy,
  professor,
  title,
}) {
  return (
    <TouchableOpacity
      style={{marginTop: 10}}
      onPress={() => {
        console.log('Clicou');
      }}>
      <SafeAreaView
        style={{
          height: 113,
          width: 330,
          backgroundColor: '#ECECEC',
          borderRadius: 20,
        }}>
        <SafeAreaView
          style={{
            width: 330,
            height: 52,
            backgroundColor: '#187B63',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <SafeAreaView
            style={{
              flex: 1,
              fontSize: 21,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: '500',
                lineHeight: 25,
                color: 'white',
              }}>
              {date}
            </Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              flex: 1,
              fontSize: 21,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SafeAreaView
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                margin: 4,
                marginRight: 11,
              }}>
              <Text style={{fontSize: 19}}>{title}</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
          <SafeAreaView
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 19}}>
              Vagas {vacancy} / {maxVacancy}
            </Text>
          </SafeAreaView>
          <SafeAreaView
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 21, color: '#187B63', fontWeight: '500'}}>
              COACH
            </Text>
            <SafeAreaView
              style={{
                width: 114,
                height: 24,
                borderRadius: 4,
                backgroundColor: '#187B63',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 21, color: 'white', fontWeight: '500'}}>
                {professor}
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableOpacity>
  );
}
