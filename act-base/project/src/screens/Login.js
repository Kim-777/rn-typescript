import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import FlatButton from '../components/FlatButton';
import Agreements from '../components/Agreements';
import Divider from '../components/Divider';
import AuthInput from '../components/AuthInput';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);

  const handleIdChange = id => {
    setId(id);
  };

  const handlePasswordChange = password => {
    setPassword(password);
  };

  const onPress = () => {
    Alert.alert('Alert', '안녕하세용~ 로그인 창 입니다.');
  };

  const toggleAutoLogin = () => {
    setAutoLogin((prev) => !prev);
  }

  useEffect(() => {
    console.log('id', id);
    console.log('password', password);
  }, [id, password]);

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
        <Agreements text="로그인 유지" checked={autoLogin} onPress={toggleAutoLogin}/>
        <FlatButton text={'로그인'} onPress={onPress} />
        <View style={[styles.optionView]}>
          <TouchableOpacity>
            <Text>회원가입</Text>
          </TouchableOpacity>
          <Divider paddingHorizontal={15} fontSize={13} />
          <TouchableOpacity>
            <Text>아이디찾기</Text>
          </TouchableOpacity>
          <Divider paddingHorizontal={15} fontSize={13} />
          <TouchableOpacity>
            <Text>비밀번호찾기</Text>
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
  socialBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  socialLogo: {
    alignItems: 'center'
  },
  socialText: {
    fontSize: 11,
    color: 'rgb(136, 136, 136)',
    marginTop: 10
  },
  grayFont: {
    color: 'rgb(136, 136, 136)',
  },
  image: {
    marginHorizontal: 8,
  },
});

export default Login;
