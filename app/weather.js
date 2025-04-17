import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, StatusBar } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'; 
import DayWeather from "./dayWeather"


const weatherOptions = {
    Clear: {
        iconName: 'sunny',
        backgroundColor: ['#FFD700', '#FFA500', '#87CEEB']
    },
    Thunderstorm: {
        iconName: 'thunderstorm',
        backgroundColor: ['#373B44', '#4286f4']
    },
    Drizzle: {
        iconName: 'rainy-outline',
        backgroundColor: ['#89F7FE', '#66A6FF']
    },
    Rain: {
        iconName: 'rainy',
        backgroundColor: ['#4e54c8', '#8f94fb']
    },
    Snow: {
        iconName: 'snow',
        backgroundColor: ['#E0EAFc', '#CFDEF3']
    },
    Atmosphere: {
        iconName: 'cloudy-outline',
        backgroundColor: ['#3E5151', '#DECBA4']
    },
    Clouds: {
        iconName: 'cloud',
        backgroundColor: ['#D7D2CC', '#304352']
    },
}

export default function Weather({temp, description, weatherMain}) {
    return (
            <LinearGradient
            colors={weatherOptions[weatherMain].backgroundColor}
            style={styles.container}
            > 
                <StatusBar barStyle="dark-content" backgroundColor={weatherOptions[weatherMain].backgroundColor[0]} />
                <View style={styles.upper_container}>
                    <Ionicons name={weatherOptions[weatherMain].iconName} size={64} color="white" />
                    <Text style={styles.temp} >{temp}°</Text>
                    <Text style={styles.text} >{description}</Text>
                </View>
                <View style={styles.lower_container}>
                    <DayWeather />
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    weatherMain: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color: "white"
    },
    text: {
        fontSize: 24,
        color: "white"
    }
})