import { Text, View, StyleSheet, StatusBar} from "react-native";
import React from 'react';
import * as Location from 'expo-location';
import Loading from "./loading";

export default class extends React.Component {

  GetLocation = async () => {
    const location = await Location.getCurrentPositionAsync()
    console.log(location)
  }
  componentDidMount(): void {
    this.GetLocation()
  }

  render () {
    return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#87CEFA" barStyle="dark-content" />
      <Loading />
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
