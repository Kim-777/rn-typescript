import React, { useEffect, useLayoutEffect, useCallback} from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data'
import type {LayoutChangeEvent} from 'react-native';




export default function LifeCycle() {

    useEffect(() => {
        console.log(Platform.OS, 'useEffect called')
        return () => console.log(Platform.OS, 'useLayoutEffect finished');
    }, [])

    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
    text: {fontSize: 20, color: 'white'}
})