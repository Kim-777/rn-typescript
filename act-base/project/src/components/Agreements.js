import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Agreements = ({essential, text, checked, onPress}) => {

  return (
    <View style={[styles.agreementsView]}>
      <TouchableOpacity style={[styles.agreementsCheckBox, {backgroundColor: checked ? 'rgb(236, 85, 121)' : 'white'}]}>
        <Icon 
          name="check" 
          size={15} 
          color={checked ? 'white' : `gray`} 
          onPress={onPress}
        />
        {/* <Image source={require('../assets/images/white-check.png')}/> */}
      </TouchableOpacity>
      <Text style={[styles.agreementsText]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  agreementsView: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreementsCheckBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  agreementsText: {
    color: '#999999',
    fontSize: 15
  }
})

export default Agreements
