import { Text, View, StyleSheet, } from "react-native";
import PropTypes from 'prop-types';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fonts } from "./constants/fonts";
import { weatherOptions } from "./constants/weatherOptions";

function formatUnixDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
  
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayMonth = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  
    return `${weekday}\n${dayMonth}`;
}

export default function DayWeather({daysData}) {

    return (
        <View style={styles.container}>
            {daysData.map((day, i) => (
                <View key={i} style={styles.day}>
                    <View style={styles.date}>
                        <Text style={fonts.small}>{formatUnixDate(day.dt)}</Text>
                    </View>
                    <View style={styles.temp}>
                        <Text style={fonts.medium}>{day.temp}°</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={fonts.small}>{day.description}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons name={weatherOptions[day.main].iconName} size={56} color="white" />
                    </View>
                </View>
            ))}
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
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    date: {
        flex: 1,        
    },
    temp: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})