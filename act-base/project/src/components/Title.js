import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import color from '../common/color';


const Title = ({title}) => {
  return (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    marginLeft: 25,
    marginTop: 45,
    borderBottomWidth: 1,
    borderColor: color.warmPink,
  },
  title: {
    fontSize: 30,
    paddingVertical: 15,
  },
});

export default Title;
