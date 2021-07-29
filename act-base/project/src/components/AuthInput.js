import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../common/color';

const AuthInput = ({
  title,
  secureTextEntry,
  placeholder,
  onChangeText,
  value,
  topRadius,
  bottomRadius,
  shouldChecked,
  isChecked,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    console.log('isFocused', isFocused);
  }, [isFocused]);

  return (
    <TouchableOpacity
      style={[
        styles.authInputWrapper,
        topRadius && styles.topRadius,
        bottomRadius && styles.bottomRadius,
        isFocused && styles.focused,
      ]}>
      <Text style={styles.authTitle}>{title}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.authInput]}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {shouldChecked &&
          (value ? (
            <Icon
              name={`${isChecked ? 'check' : 'close'}`}
              size={15}
              color={`${isChecked ? color.forest : color.grapefruit}`}
              style={{marginHorizontal: 5}}
            />
          ) : null)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  authInputWrapper: {
    borderWidth: 1,
    borderColor: color.veryLightGrey,
    height: 62,
    padding: 10,
    backgroundColor: color.white,
    justifyContent: 'space-around',
  },
  focused: {
    borderColor: color.darkGrey,
  },
  authTitle: {
    color: color.brownGrey,
    fontSize: 10,
  },
  authInput: {
    fontSize: 14,
    flex: 1,
  },
  topRadius: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomRadius: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default AuthInput;
