import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation, route }) => {

  React.useEffect(() => {
    if(route.params?.post) {
      console.log(route.params?.post)
    }
  }, [route.params?.post])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here'
        })}
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  )
}

export default HomeScreen
