import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from './screen/FeedScreen';
import CheckInScreen from './screen/CheckInScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            alignSelf: 'center',
            width: '90%',
            height: '8%',
          },
          tabBarActiveTintColor: 'tomato',
        }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="CheckIn" component={CheckInScreen} />
        <Tab.Screen name="MeusTreinos" component={CheckInScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
