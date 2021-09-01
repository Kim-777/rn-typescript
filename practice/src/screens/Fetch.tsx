import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FLatList } from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data'
import Country from './Country';

const title = 'Fetch';


export default function Fetch() {

    const [countries, setCountries] = useState<D.ICountry[]>([])
    const [error, setError] = useState<Error | null>(null);

    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
    text: {fontSize: 20, color: 'white'}
})