import { Text, View, StyleSheet, } from "react-native";
import PropTypes from 'prop-types';



export default function DayWeather({daysData}) {
    return (
        <View style={styles.container}>
            <View style={styles.day}>
                <View style={styles.date}></View>
                <View style={styles.temp}></View>
                <View style={styles.description}></View>
                <View style={styles.icon}></View>
            </View>
            <View style={styles.day}></View>
            <View style={styles.day}></View>
            <View style={styles.day}></View>
            <View style={styles.day}></View>
        </View>
    )
}

DayWeather.propTypes = {
    daysData: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
    day: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    date: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',        
    },
    temp: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
    description: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'red',
    },
    icon: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
})