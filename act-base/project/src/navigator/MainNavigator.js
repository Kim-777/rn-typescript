import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import color from '../common/color';
import SignupScreen from '../screens/SignupScreen';
import AgreeScreen from '../screens/AgreeScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginSuccessScreen from '../screens/LoginSuccessScreen';
import FindIdScreen from '../screens/FindIdScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginTitleForTest from '../components/LoginTitleForTest';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LoginTitleForTest {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="gray"
            />
          ),
        }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Agree" component={AgreeScreen} />
      <Stack.Screen name="LoginSuccess" component={LoginSuccessScreen} />
      <Stack.Screen name="FindId" component={FindIdScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
