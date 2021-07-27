import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../common/color';

const SubAgreements = ({subagreements, onPress}) => {

  const {essential, checked, text} = subagreements;

  return (
    <View style={[styles.wrapper]}>
      <TouchableOpacity style={styles.agreeBox} onPress={onPress}>
        <Icon 
          name="check" 
          size={12} 
          color={checked ? color.warmPink : color.brownGrey}
          style={styles.icon}  
        ></Icon>
        <Text
          style={{color: checked ? color.darkGrey : color.brownGrey, fontSize: 12}}
        >
          {text}
          {essential ? ' (필수)' : ' (선택)'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{position:'relative'}}
      >
        <Text
          style={styles.showMore}
        >
          약관보기
        </Text>
        <View style={styles.bar}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
    justifyContent: 'space-between'
  },
  icon: {
    marginHorizontal: 19
  },  
  agreeBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showMore: {
    color: color.darkGrey,
    fontSize: 12
  },
  bar: {
    position: 'absolute',
    backgroundColor: color.warmPink, 
    width: '100%',
    height: 2,
    bottom: 2
  }
});

export default SubAgreements;
