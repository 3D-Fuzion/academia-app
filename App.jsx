import Home from './screen/Home';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './screen/Register';
import Splash from './screen/Splash';
import Login from './screen/Login';
import Profile from './screen/Profile';
import CheckIn from './screen/CheckIn';
import Record from './screen/Record';
import DayPratice from './screen/DayPratice';
import Payment from './screen/Payment';
import Atletas from './screen/Atletas';
import Feed from './screen/Feed';
import Calendar from './screen/Calendar';
import Training from './screen/Training';
import Lesson from './screen/CheckIn/Lesson';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Atletas" component={Atletas} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="Lesson" component={Lesson} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="DayPratice" component={DayPratice} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Training" component={Training} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
