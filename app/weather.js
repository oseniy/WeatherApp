import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'; 


export default function Weather({temp, description}) {
    return (
        <View style={styles.container}>
            <LinearGradient
            // Background Linear Gradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={styles.background}
            > 
            
            </LinearGradient>
            <View style={styles.upper_container}>
                <Ionicons name="partly-sunny" size={64} color="#DCDCDC" />
                <Text style={styles.temp} >{temp}°</Text>
                <Text style={styles.text} >{description}</Text>
            </View>
            <View style={styles.lower_container}>

            </View>

        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    upper_container: {
        flex: 1,   
        justifyContent: "center",
        alignItems: "center",

    },
    lower_container: {
        flex: 2
    },
    temp: {
        fontSize: 42,
        color: "#DCDCDC"
    },
    text: {
        fontSize: 24,
        color: "#DCDCDC"
    }
})