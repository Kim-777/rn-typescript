import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SubAgreements = ({essential, checked, text, onPress}) => {
  return (
    <View style={[styles.wrapper]}>
      <TouchableOpacity style={styles.agreeBox} onPress={onPress}>
        <Icon 
          name="check" 
          size={12} 
          color={checked ? 'pink' : 'rgb(153, 153, 153)'}
          style={styles.icon}  
        ></Icon>
        <Text
          style={{color: 'rgb(153, 153, 153)', fontSize: 12}}
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
    color: 'rgb(51, 51, 51)',
    fontSize: 12
  },
  bar: {
    position: 'absolute',
    backgroundColor: 'rgb(236, 85, 121)', 
    width: '100%',
    height: 2,
    bottom: 2
  }
});

export default SubAgreements;
