import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StateCheckBottom from '../components/StateCheckBottom';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';
import {signup} from '../api';
import color from '../common/color';

const defaultRule = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,10}$/;
const phoneRule = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

const Signup = () => {

  const [disabled, setDisabled] = useState(true);

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleChangeNickname = (newNick) => {
    setNickname(newNick);
  }
  
  const handleChangeId = (newId) => {
    setUserId(newId)
  }

  const handleChangePhone = (newPhone) => {
    setPhone(newPhone);
  }

  const handleChangePassword = (newPassword) => {
    setPassword(newPassword);
  }

  const handleChangePasswordConfirm = (newConfirm) => {
    setPasswordConfirm(newConfirm); 
  }

  useEffect(() => {
    console.log('formData 값이 변경되었습니다.')
    console.log('userId => ', userId)
    console.log('password => ', password)
    console.log('nickname => ', nickname)
    console.log('phone => ', phone)
    console.log('passwordConfirm => ', passwordConfirm)
  }, [userId, password, nickname, phone, passwordConfirm])

  useEffect(() => {

  }, [nickname])

  useEffect(() => {

  }, [userId])

  useEffect(() => {

  }, [phone])

  useEffect(() => {

  }, [password])

  useEffect(() => {

  }, [passwordConfirm])


  return (
    <>
      <Title title="회원가입" />
      <ScrollView
        style={styles.signupWrapper}
        contentContainerStyle={styles.signupContent}>
        <Text style={styles.subText}>정보를 등록하고 리그에 참여하세요</Text>
        <View style={styles.info}>
          <AuthInput 
            shouldChecked
            title="별명" 
            placeholder="최대 10자 이내" 
            topRadius 
            value={nickname}
            onChangeText={handleChangeNickname}
          />
          <AuthInput 
            shouldChecked
            title="아이디" 
            placeholder="4~10자 영문 숫자 조합" 
            value={userId}
            onChangeText={handleChangeId}
            />
          <AuthInput
            shouldChecked
            title="휴대폰번호"
            placeholder="숫자만 입력"
            bottomRadius
            value={phone}
            onChangeText={handleChangePhone}
          />
        </View>
        <View style={styles.password}>
          <AuthInput
            shouldChecked
            title="비밀번호"
            placeholder="4~10자 영문 숫자 조합"
            secureTextEntry
            topRadius
            value={password}
            onChangeText={handleChangePassword}
          />
          <AuthInput
            shouldChecked
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            secureTextEntry
            bottomRadius
            value={passwordConfirm}
            onChangeText={handleChangePasswordConfirm}
          />
        </View>
      </ScrollView>
      <StateCheckBottom disabled text="회원가입 완료" />
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
    color: color.brownishGrey,
    marginTop: 14.5,
    marginBottom: 30.5,
  },
  info: {
    marginBottom: 19.5,
  },
  password: {},
});

export default Signup;
