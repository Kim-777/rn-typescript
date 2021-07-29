import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import StateCheckBottom from '../components/StateCheckBottom';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';
// import {signup} from '../api';
import color from '../common/color';
import Account from '../api/Account';
import {
  checkNicknameLength,
  regexId,
  regexPhone,
  regexPassword
} from '../utils/regex';

const SignupScreen = ({ navigation }) => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isAllChecked, setIsAllChecked] = useState({
    nicknameChecked: false,
    userIdChecked: false,
    phoneChecked: false,
    passwordChecked: false,
    passwordConfirmChecked: false,
  });

  const handleChangeNickname = newNick => {
    setNickname(newNick);
    if (checkNicknameLength(newNick)) {
      setIsAllChecked(prev => ({...prev, nicknameChecked: true}));
    } else {
      setIsAllChecked(prev => ({...prev, nicknameChecked: false}));
    }
  };

  const handleChangeId = newId => {
    setUserId(newId);
    if (regexId(newId)) {
      setIsAllChecked(prev => ({...prev, userIdChecked: true}));
    } else {
      setIsAllChecked(prev => ({...prev, userIdChecked: false}));
    }
  };

  const handleChangePhone = newPhone => {
    setPhone(newPhone);
    if (regexPhone(newPhone)) {
      setIsAllChecked(prev => ({...prev, phoneChecked: true}));
    } else {
      setIsAllChecked(prev => ({...prev, phoneChecked: false}));
    }
  };

  const handleChangePassword = newPassword => {
    setPassword(newPassword);
    if (regexPassword(newPassword)) {
      setIsAllChecked(prev => ({...prev, passwordChecked: true}));
    } else {
      setIsAllChecked(prev => ({...prev, passwordChecked: false}));
    }
  };

  const handleChangePasswordConfirm = newConfirm => {
    setPasswordConfirm(newConfirm);
  };

  const {
    nicknameChecked,
    userIdChecked,
    phoneChecked,
    passwordChecked,
    passwordConfirmChecked,
  } = isAllChecked;

  useEffect(() => {
    if (password === passwordConfirm) {
      setIsAllChecked(prev => ({...prev, passwordConfirmChecked: true}));
    } else {
      setIsAllChecked(prev => ({...prev, passwordConfirmChecked: false}));
    }
  }, [password, passwordConfirm]);


  const isAll = Object.keys(isAllChecked).reduce((acc, cur) => {
    return acc && isAllChecked[cur]
  }, true)

  const onPress = async () => {
    try {
      const result = await Account.signup({
        type: 'USER',
        active: 'true',
        userId,
        password,
        nickname,
        phone,
      });

      Alert.alert('회원가입 완료', '회원가입을 축하합니다!')
      navigation.navigate('LoginSuccess')

    } catch (e) {
      console.log('signup 도중 에러 발생', e);
    }
  };

  return (
    <>
      <Title title="회원가입" />
      <ScrollView
        style={styles.signupWrapper}
        contentContainerStyle={styles.signupContent}>
        <Text style={styles.subText}>정보를 등록하고 리그에 참여하세요</Text>
        <View style={styles.info}>
          <AuthInput
            shouldChecked={true}
            isChecked={nicknameChecked}
            title="별명"
            placeholder="최대 10자 이내"
            topRadius
            value={nickname}
            onChangeText={handleChangeNickname}
          />
          <AuthInput
            shouldChecked={true}
            isChecked={userIdChecked}
            title="아이디"
            placeholder="4~10자 영문 숫자 조합"
            value={userId}
            onChangeText={handleChangeId}
          />
          <AuthInput
            shouldChecked={true}
            isChecked={phoneChecked}
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
            isChecked={passwordChecked}
            title="비밀번호"
            placeholder="4~10자 영문 숫자 조합"
            secureTextEntry
            topRadius
            value={password}
            onChangeText={handleChangePassword}
          />
          <AuthInput
            shouldChecked
            isChecked={passwordConfirmChecked}
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            secureTextEntry
            bottomRadius
            value={passwordConfirm}
            onChangeText={handleChangePasswordConfirm}
          />
        </View>
      </ScrollView>
      <StateCheckBottom
        available={isAll}
        text="회원가입 완료"
        onPress={onPress}
      />
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

export default SignupScreen;
