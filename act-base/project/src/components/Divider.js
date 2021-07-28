import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Divider = ({ fontSize, paddingHorizontal, paddingVertical }) => {
  return (
    <View style={{paddingHorizontal, paddingVertical}}>
      {fontSize && <Text style={{fontSize}}>|</Text>}
    </View>
  )
}

export default Divider
