import React, { useCallback } from 'react';
import type {FC} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data'

export type TopBarProps = {}

const TopBar: FC<TopBarProps> = () => {

    const add = useCallback(() => {}, []);
    const deleteAll = useCallback(() => {}, []);

    return (
        <View style={[styles.topBar]}>
            <Text style={[styles.textButton]} onPress={add}>add</Text>
            <Text style={[styles.textButton]} onPress={deleteAll}>deleteAll</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {flexDirection: 'row', padding: 5, justifyContent: 'space-between', backgroundColor: Colors.lightBlue700},
    textButton: {color: 'white', fontSize: 20}
})

export default TopBar