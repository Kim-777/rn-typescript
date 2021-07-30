import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation, route }) => {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is the home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default HomeScreen
