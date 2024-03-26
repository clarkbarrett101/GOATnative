import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  CompareButton: {
    position: "absolute",
    width: 300,
    height: 150,
    right: 75,
    bottom: 75,
  },
  BottomLayer: {
    position: "absolute",
    width: 300,
    height: 150,
    left: 0,
    top: 0,
    backgroundColor: "rgba(207, 250, 254, 0.5)",
  },
  Icon: {
    position: "absolute",
    width: 140,
    height: 145,
    left: 10,
    top: 0,
  },
  Text: {
    position: "absolute",
    width: 145,
    height: 58,
    left: 150,
    top: 44,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 48,
    lineHeight: 58,
    color: "rgba(8, 51, 68, 0.5)",
  },
});
function CompareButton(props) {
  function handleTouch() {
    if (props.appMode === "noRecording" || props.appMode === "recording") {
      return;
    } else if (props.appMode === "comparing") {
      console.log("Comparing stopped");
      props.setAppMode("idle");
    } else {
      console.log("Comparing started");
      props.setAppMode("comparing");
    }
  }
  return (
    <View style={styles.CompareButton}>
      <TouchableOpacity onPress={handleTouch}>
        <View style={styles.BottomLayer}>
          <Image
            source={require("../assets/compare_inactive.png")}
            style={styles.Icon}
          />
          <Text style={styles.Text}>Compare</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export { CompareButton };
