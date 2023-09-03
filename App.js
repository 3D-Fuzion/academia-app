import Intro from './screen/Intro';
import Home from './screen/Home';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './screen/Register';
import Login from './screen/Login';
import Profile from './screen/Profile';
import CheckIn from './screen/CheckIn';
import Record from './screen/Record';
import DayPratice from './screen/DayPratice';
import Payment from './screen/Payment';
import Atletas from './screen/Atletas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Payment"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Atletas" component={Atletas} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="DayPratice" component={DayPratice} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
