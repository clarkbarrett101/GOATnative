import { StatusBar } from "expo-status-bar";
import { Tracker } from "./src/Tracker";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/FitCheck1";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
