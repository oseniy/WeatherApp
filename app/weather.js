import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, StatusBar } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import DayWeather from "./dayWeather";
import { fonts } from "./constants/fonts";
import { weatherOptions } from "./constants/weatherOptions";

export default function Weather({temp, description, weatherMain, daysData}) {
    return (
            <LinearGradient
            colors={weatherOptions[weatherMain].backgroundColor}
            style={styles.container}
            > 
                <StatusBar barStyle="dark-content" backgroundColor={weatherOptions[weatherMain].backgroundColor[0]} />
                <View style={styles.upper_container}>
                    <Ionicons name={weatherOptions[weatherMain].iconName} size={64} color="white" />
                    <Text style={fonts.large} >{temp}°</Text>
                    <Text style={fonts.small} >{description}</Text>
                </View>
                <View style={styles.lower_container}>
                    <DayWeather daysData={daysData}/>
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    weatherMain: PropTypes.string.isRequired,
    daysData: PropTypes.array.isRequired,
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
})