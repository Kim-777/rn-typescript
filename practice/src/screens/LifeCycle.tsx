import React, { useEffect, useLayoutEffect, useCallback} from 'react';
import {Platform, StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-paper'
import type { LayoutChangeEvent } from 'react-native';

export default function LifeCycle() {

  useEffect(() => {
    console.log(Platform.OS, 'useEffect called')
    return () => console.log(Platform.OS, 'useEffect finished')
  }, [])

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>저는 사용되지 않을 컴포넌트 입니다!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'}
})