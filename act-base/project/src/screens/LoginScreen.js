import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FlatButton from '../components/FlatButton';
import Agreements from '../components/Agreements';
import Divider from '../components/Divider';
import AuthInput from '../components/AuthInput';
import color from '../common/color';
// import { login } from '../api';
import Account from '../api/Account';
import SuccessPage from '../components/SuccessPage';
import { storeAccessToken } from '../utils/asyncStorage';

const LoginScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginComplete, setLoginComplete] = useState(false);
  const [loginedUser, setLoginedUser] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);

  const handleIdChange = id => {
    setId(id);
  };

  const handlePasswordChange = password => {
    setPassword(password);
  };

  const goToMain = () => {
    setLoginComplete(false);
    setId('');
    setPassword('');
    navigation.navigate('Home', {
      autoLogin,
      userNickname: loginedUser,
    });
  };

  const onPress = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('username', id);
      formData.append('password', password);
      formData.append('grant_type', 'password');

      const { data } = await Account.login(formData);
      console.log(data.access_token);

      await Account.setToken(data.access_token);

      if(autoLogin) {
        await storeAccessToken(data.access_token)
        console.log('storage에 토큰 저장완료!')
      }
      const user = await Account.userInfo();

      setLoginedUser(user.data.nickname);
      setIsLoading(false);
      setLoginComplete(true);

    } catch (e) {
      if (e.response.status >= 400 && e.response.status < 500) {
        Alert.alert('로그인 실패', '알맞은 아이디와 비밀번호를 입력해주세요.');
      } else {
        console.log('로그인 도중 문제가 발생했습니다.', e.response.status);
      }

      setIsLoading(false);
    }
  };

  const toggleAutoLogin = () => {
    setAutoLogin(prev => !prev);
  };

  useEffect(() => {
    console.log('id', id);
    console.log('password', password);
  }, [id, password]);

  if (isLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={color.warmPink} />
      </View>
    );

  if (loginComplete)
    return (
      <>
        <SuccessPage nowPage="로그인" onPress={goToMain} name={loginedUser}/>
      </>
    );

  return (
    <ScrollView
      style={styles.loginWrapper}
      contentContainerStyle={{flexGrow: 1}}>
      <TouchableOpacity style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </TouchableOpacity>
      <View style={{flex: 2, justifyContent: 'flex-start', paddingBottom: 40}}>
        <AuthInput
          isFinished
          value={id}
          title="아이디"
          placeholder="아이디를 입력하세요."
          onChangeText={handleIdChange}
        />
        <AuthInput
          value={password}
          title="비밀번호"
          placeholder="비밀번호를 입력하세요."
          onChangeText={handlePasswordChange}
        />
        <Agreements
          text="로그인 유지"
          checked={autoLogin}
          onPress={toggleAutoLogin}
        />
        <FlatButton text={'로그인'} onPress={onPress} />
        <View style={[styles.optionView]}>
          <TouchableOpacity onPress={() => {navigation.navigate('Agree')}}>
            <Text style={styles.setting}>회원가입</Text>
          </TouchableOpacity>
          <Divider paddingHorizontal={15} fontSize={13} />
          <TouchableOpacity onPress={() => {navigation.navigate('FindId')}}>
            <Text style={styles.setting}>아이디찾기</Text>
          </TouchableOpacity>
          <Divider paddingHorizontal={15} fontSize={13} />
          <TouchableOpacity>
            <Text style={styles.setting}>비밀번호찾기</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.socialWrapper]}>
          <View></View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.grayFont}>혹은 </Text>
            <Text>소셜 아이디</Text>
            <Text style={styles.grayFont}>로 로그인</Text>
          </View>
          <View></View>
          <View style={[styles.socialBox]}>
            <TouchableOpacity style={styles.socialLogo}>
              <Image
                style={[styles.image]}
                source={require('../assets/images/apple-icon.png')}
              />
              <Text style={styles.socialText}>애플</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialLogo]}>
              <Image
                style={[styles.image]}
                source={require('../assets/images/naver-icon.png')}
              />
              <Text style={styles.socialText}>네이버</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialLogo]}>
              <Image
                style={[styles.image]}
                source={require('../assets/images/facebook-icon.png')}
              />
              <Text style={styles.socialText}>페이스북</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialLogo]}>
              <Image
                style={[styles.image]}
                source={require('../assets/images/kakao-icon.png')}
              />
              <Text style={styles.socialText}>카카오</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {flex: 1, paddingHorizontal: 25},
  logoWrapper: {
    // flex: 1,
    marginVertical: 50,
    justifyContent: 'center',
  },
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  setting: {
    color: color.brownishGrey,
  },
  socialBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  socialLogo: {
    alignItems: 'center',
  },
  socialText: {
    fontSize: 11,
    color: color.warmGrey,
    marginTop: 10,
  },
  grayFont: {
    color: color.warmGrey,
  },
  image: {
    marginHorizontal: 8,
  },
});

export default LoginScreen;
