import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import StateCheckBottom from '../components/StateCheckBottom';
import Title from '../components/Title';
import Agreements from '../components/Agreements';
import SubAgreements from '../components/SubAgreements';
import color from '../common/color';

const AgreeScreen = ({ navigation }) => {
  
  const [subCheckLists, setSubCheckLists] = useState([{
    id: 1,
    essential: true,
    text: "서비스 이용약관",
    checked: false
  }, {
    id: 2,
    essential: true,
    text: "개인정보처리방침",
    checked: false
  }, {
    id: 3,
    essential: true,
    text: "개인벙보 수집 및 이용",
    checked: false
  }, {
    id: 4,
    essential: false,
    text: "개인정보 제3자 제공 동의",
    checked: false
  }, {
    id: 5,
    essential: false,
    text: "마케팅 활용 동의",
    checked: false
  }])

  const onSubClick  = (id) => {
    setSubCheckLists((prev) => (
      prev.map((sub) => sub.id === id ? {...sub, checked: !sub.checked} : sub)
    ))
  }

  const handleAllCheck = () => {
    setSubCheckLists(prev => {
      const next = prev.map(list => {
        return {
          ...list,
          checked: true
        }
      });

      return next;
    })
  }

  const handleAllUncheck = () => {
    setSubCheckLists(prev => {
      const next = prev.map(list => {
        return {
          ...list,
          checked: false
        }
      });

      return next;
    })
  }

  const isAllChecked = subCheckLists.reduce((acc, cur) => {
    return acc && cur.checked
  }, true)
  

  const checkEssentialChecked = !subCheckLists.find(list => list.essential === true && list.checked === false)
  

  const goToSignup = () => {
    navigation.navigate('Signup')
  }

  

  return (
    <>
    <Title title="약관동의" />
    <View style={[styles.agreeContent]}>
      <Text style={styles.subText}>정보를 등록하고 리그에 참여하세요.</Text>
      <View style={[styles.allAgreeBox]}>
        <Agreements
          checked={isAllChecked}
          text="약관에 모두 동의합니다."
          onPress={isAllChecked ? handleAllUncheck : handleAllCheck}
        />
      </View>
      <View style={[styles.subAgreeBox]}>
        {
          subCheckLists.map(list => (<SubAgreements key={list.id} subagreements={list} onPress={() => onSubClick(list.id)}/>))
        }
      </View>
    </View>
    <StateCheckBottom available={checkEssentialChecked} text="다음으로" onPress={goToSignup}/>
    </>
  )
}


const styles = StyleSheet.create({
  agreeContent: {
    flex: 1,
    paddingHorizontal: 25,
  },
  subText: {
    fontSize: 14,
    letterSpacing: -1.05,
    color: color.brownishGrey,
    marginTop: 14.5,
    marginBottom: 30.5,
  },
  allAgreeBox: {
    borderWidth: 1,
    borderColor: color.veryLightGrey,
    height: 52,
    backgroundColor: color.white,
    justifyContent: 'center',
    paddingHorizontal: 9,
    borderRadius: 7
  },
  subAgreeBox: {

  }
})

export default AgreeScreen
