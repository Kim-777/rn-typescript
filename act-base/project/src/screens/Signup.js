import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StateCheckBottom from '../components/StateCheckBottom';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';

const Signup = () => {
  return (
    <>
      <Title title="회원가입" />
      <ScrollView style={styles.signupWrapper} contentContainerStyle={styles.signupContent}>
        <Text style={styles.subText}>정보를 등록하고 리그에 참여하세요</Text>
        <View style={styles.info}>
          <AuthInput title="별명" placeholder="최대 10자 이내" topRadius/>
          <AuthInput title="아이디" placeholder="4~10자 영문 숫자 조합" />
          <AuthInput title="휴대폰번호" placeholder="숫자만 입력" bottomRadius/>
        </View>
        <View style={styles.password}>
          <AuthInput title="비밀번호" placeholder="4~10자 영문 숫자 조합" secureTextEntry topRadius/>
          <AuthInput title="휴대폰번호" placeholder="비밀번호를 다시 입력해주세요." secureTextEntry bottomRadius/>
        </View>
      </ScrollView>
      <StateCheckBottom text="회원가입 완료" />
    </>
  );
};

const styles = StyleSheet.create({
  signupWrapper: {
    // minHeight: '100%',
  },
  signupContent: {
    flex: 1,
    minHeight: '100%',
    paddingHorizontal: 25,
  },
  subText: {
    fontSize: 14,
    letterSpacing: -1.05,
    color: 'rgb(102,102,102)',
    marginTop: 14.5,
    marginBottom: 30.5,
  },
  info: {
    marginBottom: 19.5
  },
  password: {

  },
});

export default Signup;
