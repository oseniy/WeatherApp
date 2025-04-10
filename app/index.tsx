import { Text, View, StyleSheet, StatusBar, Alert} from "react-native";
import React from 'react';
import * as Location from 'expo-location';
import Loading from "./loading";
import axios from 'axios'

const API_KEY = '32da35c7fdfa601889d7046e111d7cd3'

export default class extends React.Component {

  state = {
    isLoading: true
  }

  GetWeather = async (latitude: number, longitude: number) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
  }  

  GetData = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.GetWeather(latitude, longitude)
      this.setState({isLoading: false})
    } catch (error) {
      Alert.alert('Не могу определить местоположение', ":(")
    }
    
  }
  componentDidMount(): void {
    this.GetData()
  }

  render () {
    const {isLoading} = this.state
    return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#87CEFA" barStyle="dark-content" />
      {isLoading ? <Loading /> : <Text>погодка</Text>}
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
