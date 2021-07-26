import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StateCheckBottom = ({text, disabled, finished}) => {
  return (
    <View style={[styles.wrapper]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.bar}></View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    height: 77,
    alignItems: 'center',
    backgroundColor: 'rgb(204, 204, 204)'   
  },
  bar: {
    width: 134,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'rgb(51, 51, 51)'
  },
  text: {
    marginTop: 22,
    marginBottom: 20,
    fontSize: 16,
    letterSpacing: -0.8,
    color: 'white',
  }, 
})

export default StateCheckBottom
