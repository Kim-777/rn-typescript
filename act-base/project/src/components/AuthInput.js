import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AuthInput = ({title, secureTextEntry, placeholder, onChangeText, value, topRadius, bottomRadius}) => {
  return (
    <TouchableOpacity style={[styles.authInputWrapper, topRadius && styles.topRadius, bottomRadius && styles.bottomRadius]}>
      <Text style={styles.authTitle}>
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.authInput]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />

    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  authInputWrapper: {
    borderWidth: 1, 
    borderColor: 'rgb(238, 238, 238)',
    height: 62,
    padding: 10,
    justifyContent: 'space-around'
  },
  authTitle: {
    color: 'rgb(153, 153, 153)',
    fontSize: 10,
  },
  authInput: {
    fontSize: 14
  },
  topRadius: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomRadius: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
})




export default AuthInput;
