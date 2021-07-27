import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import color from '../common/color'

const StateCheckBottom = ({text, disabled, finished, onPress}) => {
  return (
    <TouchableOpacity 
      style={[styles.wrapper, finished && styles.finished]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.bar, finished && {backgroundColor: color.white}]}></View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    height: 77,
    alignItems: 'center',
    backgroundColor: color.lightGrey,   
  },
  bar: {
    width: 134,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: color.darkGrey,
  },
  text: {
    marginTop: 22,
    marginBottom: 20,
    fontSize: 16,
    letterSpacing: -0.8,
    color: color.white,
  }, 
  finished: {
    backgroundColor: color.warmPink,
  }
})

export default StateCheckBottom
