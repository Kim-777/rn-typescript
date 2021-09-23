import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Button } from 'react-native';
import { Colors } from 'react-native-paper'


export default function Timer() {

  const [loading, setLoading] = useState<boolean>(true)
  const toggleLoading = useCallback(() => setLoading((loading) => !loading), [])

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(id)
  }, [])

  return (
    <View style={[styles.view]}>
      <Text style={[styles.title]}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'}/>
      {loading && (
        <ActivityIndicator size="large" color={Colors.deepPurple700} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.yellow300, alignItems: 'center'},
  title: {fontSize: 30, fontWeight: '600'}
})