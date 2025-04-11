import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from "react-native";


export default function Weather({temp, description}) {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
            <Text>{description}</Text>
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
    }
})