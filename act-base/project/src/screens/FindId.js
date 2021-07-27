import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StateCheckBottom from '../components/StateCheckBottom';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';
import Agreements from '../components/Agreements';
import SubAgreements from '../components/SubAgreements';

const FindId = () => {
  return (
    <>
    <Title title="아이디찾기" />
    <View style={[styles.content]}>
      <Text style={styles.subText}>
        회원님의 아이디를 찾기 위해 {"\n"}
        가입시 등록한 휴대폰 인증을 진행합니다.
      </Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  subText: {
    fontSize: 14,
    letterSpacing: -1.05,
    color: 'rgb(102,102,102)',
    marginTop: 14.5,
    marginBottom: 30.5,
  }
})

export default FindId
