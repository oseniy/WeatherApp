import { Text, View, StyleSheet, Alert} from "react-native";
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import axios from 'axios'
import Loading from "./loading";
import Weather from "./weather";

const API_KEY = '32da35c7fdfa601889d7046e111d7cd3'

function getDailyAverages(list) {
  const result = [];

  for (let i = 8; i < 40; i += 8) {
    const dayGroup = list.slice(i, i + 8);
    const avgTemp =
      dayGroup.reduce((sum, item) => sum + item.main.temp, 0) / dayGroup.length;
    result.push(Math.round(avgTemp));
  }

  return result;
}

export default function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [temp, setTemp] = useState(null)
  const [description, setDescription] = useState('')
  const [weatherMain, setWeatherMain] = useState('')
  const [daysData, setDaysData] = useState('')

  const getWeather = async (latitude, longitude) => {
    console.log('getWeather started')

    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    console.log('got data')

    setTemp(temp)
    setDescription(weather[0].description)
    setWeatherMain(weather[0].main)
    console.log('set states')

    const {data: {list}} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    console.log('got data2')
    
    const averageTemps = getDailyAverages(list);
    console.log(averageTemps)
    const daysData = Array.from({ length: 4 }, (_, i) => {
      const index = (i + 1) * 8;
      const item = list[index];
      return {
        dt: item.dt,
        temp: averageTemps[i],
        main: item.weather[0].main,
        description: item.weather[0].description
      };
    });
    console.log(daysData)
    setDaysData(daysData)
    setIsLoading(false)
    console.log(temp, weather[0].description, weather[0].main)
  }  

  const getData = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert('Не могу определить местоположение', ":(")
    }
    
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : <Weather temp={Math.round(temp)} description={description} weatherMain={weatherMain} daysData={daysData}/>}
    </View>
  ) 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
