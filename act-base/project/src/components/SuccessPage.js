import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import StateCheckBottom from '../components/StateCheckBottom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../common/color';

const SuccessPage = ({ onPress, nowPage }) => {

  return (
    <>
    <View style={styles.wrapper}>
      <View style={styles.checkCircle}>
      <Icon
          name="check"
          size={80}
          color={color.warmPink}
          accessible={false}
        />
      </View>
      <Text style={styles.bigFont}>{nowPage}이 완료되었습니다.</Text>
      {/* <Text style={styles.smallFont}>로그인하고 바로 리그에 참여해 보세요.</Text> */}
    </View>
    <StateCheckBottom text="메인으로가기" available onPress={onPress}/>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkCircle: {
    backgroundColor: color.veryLightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 75
  },
  bigFont: {
    marginTop: 30,
    marginBottom: 12,
    color: color.darkGrey,
    fontSize: 21,
    letterSpacing: -1.5
  },
  smallFont: {
    color: color.warmGrey,
    letterSpacing: -1.05,
    fontSize: 14
  }
})

export default SuccessPage
