import { Text, View, StyleSheet } from "react-native";

export default function loading() {
    return (
      <View
        style={styles.container}
      >
        <Text>Получение данных о погоде...</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
  })