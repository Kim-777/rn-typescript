import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Divider = ({ fontSize, paddingHorizontal }) => {
  return (
    <View style={{paddingHorizontal}}>
      <Text style={{fontSize}}>|</Text>
    </View>
  )
}

export default Divider
