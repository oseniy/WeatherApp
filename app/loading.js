import { Text, View, StyleSheet, StatusBar } from "react-native";
import React, { useState, useEffect } from 'react';

export default function loading() {

  const [dots, setDots] = useState('...');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '.';
        return prev + '.';
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return (
      <View style={styles.container} >
        <StatusBar barStyle="dark-content" backgroundColor="#87CEFA"/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Получение данных о погоде</Text>
          <Text style={styles.dots}>{dots}</Text>
        </View>
        <View style={styles.subContainer} ></View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#87CEFA"
      
    },
    textContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    subContainer: {
      flex: 3
    },
    text: {
      fontSize: 22,
      color: "white"
    },
    dots: {
      fontSize: 32,
      color: "white"      
    }
  })