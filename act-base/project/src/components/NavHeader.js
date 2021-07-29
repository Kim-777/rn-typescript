import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavHeader = ({ clickBack, clickClose}) => {
  return (
    <View style={[styles.wrapper]}>
      { clickBack ? <Icon name="arrow-left" size={25} color={'black'} onPress={clickBack}/> : <Text>{''}</Text>}
      {clickClose &&<Icon name="close" size={25} color={'black'} onPress={clickClose}/>}
    </View>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    marginTop: 25,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})


export default NavHeader;
