import { Text, View, StyleSheet, Alert} from "react-native";
import React from 'react';
import * as Location from 'expo-location';
import axios from 'axios'
import Loading from "./loading";
import Weather from "./weather";

const API_KEY = '32da35c7fdfa601889d7046e111d7cd3'

export default class extends React.Component {

  state = {
    isLoading: true
  }

  GetWeather = async (latitude, longitude) => {
    console.log('getWeather started')
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    const description = weather[0].description
    const weatherMain = weather[0].main
    console.log(temp, description, weatherMain)
    this.setState({isLoading: false, temp, description, weatherMain })
  }  

  GetData = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.GetWeather(latitude, longitude)
    } catch (error) {
      Alert.alert('Не могу определить местоположение', ":(")
    }
    
  }
  componentDidMount() {
    this.GetData()
  }

  render () {
    const {isLoading, temp, description, weatherMain} = this.state
    return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : <Weather temp={Math.round(temp)} description={description} weatherMain={weatherMain}/>}
    </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
