import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';
import DetailsScreen from './DetailsScreen';


const SettingsStack = createStackNavigator();


const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen}/>
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen
