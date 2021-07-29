import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../common/color';

const Agreements = ({text, checked, onPress}) => {
  return (
    <TouchableOpacity style={[styles.agreementsView]} onPress={onPress}>
      <View
        style={[
          styles.agreementsCheckBox,
          {backgroundColor: checked ? color.warmPink : color.veryLightGrey4},
        ]}>
        <Icon name="check" size={15} color={'white'} onPress={onPress} />
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
    color: color.brownGrey,
    fontSize: 15,
  },
  checkedText: {
    color: color.darkGrey,
  },
});

export default Agreements;
