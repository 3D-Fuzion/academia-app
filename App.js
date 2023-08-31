import Intro from './screen/Intro';
import Home from './screen/Home';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
