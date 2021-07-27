import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Agreements = ({text, checked, onPress}) => {
  return (
    <TouchableOpacity style={[styles.agreementsView]} onPress={onPress}>
      <View
        style={[
          styles.agreementsCheckBox,
          {backgroundColor: checked ? 'rgb(236, 85, 121)' : 'rgb(221, 221, 221)'},
        ]}>
        <Icon
          name="check"
          size={15}
          color={'white'}
          onPress={onPress}
        />
      </View>
      <Text style={[styles.agreementsText, checked && styles.checkedText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

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
    alignItems: 'center',
  },
  agreementsText: {
    color: '#999999',
    fontSize: 15,
  },
  checkedText: {
    color: 'black',
  },
});

export default Agreements;
