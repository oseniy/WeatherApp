import { Text, View, StyleSheet, StatusBar} from "react-native";
import * as Location from 'expo-location';
import Loading from "./loading";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#87CEFA" barStyle="dark-content" />
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEFA"
  }
})
