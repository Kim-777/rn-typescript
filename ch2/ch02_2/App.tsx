import React from 'react';
import {
  SafeAreaView,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  Text,
} from 'react-native';
import { TextInput } from 'react-native';



export default function App() {
  const onPress = () => {
    Alert.alert('home pressed', 'message');
  };

  return (
    <SafeAreaView>
      <Button title="Home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
}
