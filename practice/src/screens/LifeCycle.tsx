import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import {Colors} from 'react-native-paper';
import { useLayout } from '../hooks';




export default function LifeCycle() {

    const [layout, setLayout] = useLayout();

    return (
        <View onLayout={setLayout} style={[styles.view]}>
            <Text style={[styles.text]}>Life Cycle</Text>
            <Text>layout : {JSON.stringify(layout, null, 2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
    text: {fontSize: 20, color: 'white'}
})