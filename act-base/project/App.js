import 'react-native-gesture-handler';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import AgreeScreen from './src/screens/AgreeScreen';
import FindIdScreen from './src/screens/FindIdScreen';
import LoginSuccessScreen from './src/screens/LoginSuccessScreen';
import HomeScreen from './src/screens/HomeScreen';
import {decode, encode} from 'base-64';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './src/screens/DetailScreen';
import color from './src/common/color';

import LoginTitleForTest from './src/components/LoginTitleForTest';

const Stack = createStackNavigator();

const App = () => {
  if (!global.btoa) {
    global.btoa = encode;
  }
  if (!global.atob) {
    global.atob = decode;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: color.warmPink,
          },
          headerTintColor: color.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: props => <LoginTitleForTest {...props} />,
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"            
            />
        )}}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Agree" component={AgreeScreen} />
        <Stack.Screen name="LoginSuccess" component={LoginSuccessScreen} />
        <Stack.Screen name="FindId" component={FindIdScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'rgb(249, 249, 249)',
  },
});

export default App;
