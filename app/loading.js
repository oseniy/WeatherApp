import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function loading() {
    return (
      <View style={styles.container} >
        <StatusBar barStyle="dark-content" />
        <View style={styles.textContainer}>
          <Text>Получение данных о погоде...</Text>
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
    }
  })