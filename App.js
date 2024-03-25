import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RecordButton } from "./src/RecordButton";
import { CompareButton } from "./src/CompareButton";
import { BackDrop } from "./src/BackDrop";
import { Score } from "./src/Score";
import {MainMenu} from "./src/MainMenu";

export default function App() {
  return (
    <View style={styles.container}>
      
     
      <RecordButton />
      <CompareButton />
      <MainMenu />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
