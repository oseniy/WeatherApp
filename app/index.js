import { Text, View, StyleSheet, StatusBar, Alert} from "react-native";
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
    console.log(temp, description)
    this.setState({isLoading: false, temp: temp, description: description })
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
    const {isLoading, temp, description} = this.state
    return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#87CEFA" barStyle="dark-content" />
      {isLoading ? <Loading /> : <Weather temp={Math.round(temp)} description={description}/>}
    </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEFA"
  }
})
