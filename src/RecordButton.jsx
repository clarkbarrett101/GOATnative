import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

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

class RecordButton extends React.Component {
  render() {
    return (
      <View style={styles.RecordButton}>
        <View style={styles.BottomLayer}>
          <Image
            source={require("../assets/record_inactive.png")}
            style={styles.Icon}
          />
          <Text style={styles.Text}>Record</Text>
        </View>
      </View>
    );
  }
}
export { RecordButton };
