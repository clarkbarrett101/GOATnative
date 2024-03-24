import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  RecordButton: {
    position: "absolute",
    width: 300,
    height: 150,
    left: 75,
    bottom: 75,
  },

  BottomLayer: {
    width: 300,
    height: 150,
    left: 0,
    top: 0,

    backgroundColor: "#FEE2E2",
    borderWidth: 10,
    borderColor: "#450A0A",
    borderStyle: "solid",
  },
  Icon: {
    width: 100,
    height: 105,
    left: 20,
    top: 19,
  },

  Text: {
    position: "absolute",
    width: 126,
    height: 77,
    left: 150,
    top: 36,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 77,
    color: "#450A0A",
  },
});

function RecordButton(props) {
  function handleTouch() {
    if (props.appMode === "recording") {
      console.log("Recording stopped");
      props.setAppMode("idle");
    } else {
      console.log("Recording started");
      props.setAppMode("recording");
    }
  }
  return (
    <View style={styles.RecordButton}>
      <TouchableOpacity onPress={handleTouch}>
        <View style={styles.BottomLayer}>
          <Image
            source={require("../assets/record_inactive.png")}
            style={styles.Icon}
          />
          <Text style={styles.Text}>Record</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export { RecordButton };
