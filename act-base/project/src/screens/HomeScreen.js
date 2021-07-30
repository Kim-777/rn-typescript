import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Divider from '../components/Divider';
import color from '../common/color';
import { getAccessToken, storeAccessToken } from '../utils/asyncStorage';
import Account from '../api/Account';

const HomeScreen = ({navigation, route}) => {

  const userNickname = route?.params?.userNickname;

  const [loginedUser, setLoginedUser] = useState(null);

  useEffect(() => {

    const checkLoginedUser = async () => {

      const access_token = await getAccessToken();
      
      if(access_token) {
        await Account.setToken(access_token);
        console.log('토큰 저장완료!');
        await Account.userInfo();
      } else {
        console.log('저장되어 있던 토큰이 없습니다.')
      }
      
    }

    checkLoginedUser();

  }, [])

  return (
    <View style={[styles.view]}>
      <Text style={{fontSize: 20}}>동학개미운동 메인 페이지</Text>
      {userNickname ? (<Text>{userNickname}님 환영합니다!</Text>) : null}
      <Divider paddingVertical={5} />
      <Button
        title="디테일(테스트) 하러 가기"
        color={color.warmPink}
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Divider paddingVertical={3} />
      <Button
        title="로그인 하러 가기"
        color={color.warmPink}
        onPress={() => navigation.navigate('Login')}
      />
      <Divider paddingVertical={3} />
      <Button
        color={color.warmPink}
        title="회원 가입 하러 가기"
        onPress={() => navigation.navigate('Signup')}
      />
      <Divider paddingVertical={3} />
      <Button
        color={color.warmPink}
        title="동의 하러 가기"
        onPress={() => navigation.navigate('Agree')}
      />
      <Divider paddingVertical={3} />
      <Button
        color={color.warmPink}
        title="로그인 서세스 페이지"
        onPress={() => navigation.navigate('LoginSuccess')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
