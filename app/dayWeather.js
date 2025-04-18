import { Text, View, StyleSheet, } from "react-native";
import PropTypes from 'prop-types';
import Ionicons from '@expo/vector-icons/Ionicons';

const weatherOptions = {
    Clear: 'sunny',
    Thunderstorm: 'thunderstorm',
    Drizzle: 'rainy-outline',
    Rain: 'rainy',
    Snow: 'snow',
    Atmosphere: 'cloudy-outline',
    Clouds: 'cloud',
}

export default function DayWeather({daysData}) {

    function formatUnixDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
      
        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayMonth = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
      
        return `${weekday}\n${dayMonth}`;
      }

    return (
        <View style={styles.container}>
            <View style={styles.day}>
                <View style={styles.date}>
                    <Text style={styles.text}>{formatUnixDate(daysData[0].dt)}</Text>
                </View>
                <View style={styles.temp}>
                    <Text style={styles.temp_text}>{daysData[0].temp}°</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.text}>{daysData[0].description}</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name={weatherOptions[daysData[0].main]} size={56} color="white" />
                </View>
            </View>
            <View style={styles.day}>
                <View style={styles.date}>
                    <Text style={styles.text}>{formatUnixDate(daysData[1].dt)}</Text>
                </View>
                <View style={styles.temp}>
                    <Text style={styles.temp_text}>{daysData[1].temp}°</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.text}>{daysData[1].description}</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name={weatherOptions[daysData[1].main]} size={56} color="white" />
                </View>
            </View>
            <View style={styles.day}>
                <View style={styles.date}>
                    <Text style={styles.text}>{formatUnixDate(daysData[2].dt)}</Text>
                </View>
                <View style={styles.temp}>
                    <Text style={styles.temp_text}>{daysData[2].temp}°</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.text}>{daysData[2].description}</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name={weatherOptions[daysData[2].main]} size={56} color="white" />
                </View>
            </View>
            <View style={styles.day}>
                <View style={styles.date}>
                    <Text style={styles.text}>{formatUnixDate(daysData[3].dt)}</Text>
                </View>
                <View style={styles.temp}>
                    <Text style={styles.temp_text}>{daysData[3].temp}°</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.text}>{daysData[3].description}</Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name={weatherOptions[daysData[3].main]} size={56} color="white" />
                </View>
            </View>
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
        // borderWidth: 1,
        borderColor: 'red',        
    },
    temp: {
        flex: 1,
        // borderWidth: 1,
        borderColor: 'red',
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        flex: 2,
        // borderWidth: 1,
        borderColor: 'red',
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        flex: 1,
        // borderWidth: 1,
        borderColor: 'red',
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "white",
    },
    temp_text: {
        fontSize: 32,
        color: "white",        
    }
})