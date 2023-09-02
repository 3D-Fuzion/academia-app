import Intro from './screen/Intro';
import Home from './screen/Home';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './screen/Register';
import Login from './screen/Login';
import Record from './screen/Record';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Record"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
