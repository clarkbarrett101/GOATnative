import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  BackLayer: {
    position: "absolute",
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#450A0A",
    zIndex: -1,
  },
  Rectangle2: {
    position: "absolute",
    width: screenWidth - 100,
    height: screenHeight - 100,
    left: 50,
    top: 50,
    backgroundColor: "#FEE2E2",
    borderRadius: 48,
    zIndex: -1,
  },
  PlaceholderLogo: {
    position: "absolute",
    width: 200,
    height: 200,
    left: 120,
    top: 70,
    // To use a local image, require it
    // For example:
    // backgroundColor: require('./PlaceholderLogo.png'),
  },
  Rectangle5: {
    position: "absolute",
    width: 250,
    height: 400,
    left: 100,
    top: 300,
    backgroundColor: "#D9D9D9",
    borderWidth: 5,
    borderColor: "#450A0A",
    borderRadius: 13,
    // boxSizing: 'border-box', // Not needed in React Native
  },
  LiveView: {
    position: "absolute",
    width: 300,
    height: 77,
    left: 120,
    top: 300,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 48,
    lineHeight: 77,
    color: "#083344",
  },
  Rectangle4: {
    position: "absolute",
    width: 250,
    height: 400,
    right: 100,
    top: 300,
    backgroundColor: "#D9D9D9",
    borderWidth: 5,
    borderColor: "#083344",
    borderRadius: 13,
    // boxSizing: 'border-box', // Not needed in React Native
  },
  Recorded: {
    position: "absolute",
    width: 225,
    height: 77,
    right: 100,
    top: 300,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 48,
    lineHeight: 77,
    color: "#083344",
  },
});

class BackDrop extends React.Component {
  render() {
    return (
      <View style={styles.BackLayer}>
        <View style={styles.Rectangle2} />
        <Image
          source={require("../assets/goat_logo.png")}
          style={styles.PlaceholderLogo}
        />
        {/* <View style={styles.PlaceholderLogo} /> */}
        <View style={styles.Rectangle5} />
        <Text style={styles.LiveView}>Live View</Text>
        <View style={styles.Rectangle4} />
        <Text style={styles.Recorded}>Recorded</Text>
      </View>
    );
  }
}

export { BackDrop };
