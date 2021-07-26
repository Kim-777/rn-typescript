import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = ({ title }) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleWrapper: {
    marginLeft: 25,
    marginTop: 90,
    borderBottomWidth: 1,
    borderColor: 'rgb(236, 85, 121)'
  },
  title: {
    fontSize: 30,
    paddingVertical: 15,
  },
})

export default Title
