import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const FlatButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 22,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(236, 85, 121)'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default FlatButton