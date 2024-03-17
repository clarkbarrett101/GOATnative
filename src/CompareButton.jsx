import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

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
class CompareButton extends React.Component {
  render() {
    return (
      <View style={styles.CompareButton}>
        <View style={styles.BottomLayer}>
          <Image
            source={require("../assets/compare_inactive.png")}
            style={styles.Icon}
          />
          <Text style={styles.Text}>Compare</Text>
        </View>
      </View>
    );
  }
}
export { CompareButton };
