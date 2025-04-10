import { Text, View, StyleSheet } from "react-native";

export default function loading() {
    return (
      <View style={styles.container} >
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