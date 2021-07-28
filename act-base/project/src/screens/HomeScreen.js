import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Divider from '../components/Divider';
import color from '../common/color';

const HomeScreen = ({navigation}) => {
  return (
    <View style={[styles.view]}>
      <Text style={{fontSize: 20}}>동학개미운동 메인 페이지</Text>
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
