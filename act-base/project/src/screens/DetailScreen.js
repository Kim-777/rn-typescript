import React from 'react'
import { View, Text, Button } from 'react-native'
import Divider from '../components/Divider';

const DetailScreen = ({ navigation, route }) => {

  const { itemId, otherParam } = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Divider paddingVertical={5}/>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
        })}
      />
      <Divider paddingVertical={3}/>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Divider paddingVertical={3}/>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default DetailScreen
