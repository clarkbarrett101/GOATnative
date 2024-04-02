import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fitcheck.png")}
        style={styles.fitcheck1}
      >
        <View style={styles.menu}>
          <View style={styles.rectangle16} />
          <Text style={styles.workoutPlanner}>Workout Planner</Text>
          <View style={styles.rectangle17} />
          <Text style={styles.tutorials}>Tutorials</Text>
          <View style={styles.rectangle18} />
          <Text style={styles.fitCheckTracker}>fitCheck Tracker</Text>
          <View style={styles.rectangle19} />
          <Text style={styles.fitCheckStore}>fitCheck Store</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 1280,
    height: 2201,
  },
  menu: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  rectangle16: {
    position: "absolute",
    left: "12.81%",
    right: "12.81%",
    top: "61.7%",
    bottom: "30.76%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  workoutPlanner: {
    position: "absolute",
    width: 952,
    height: 118,
    left: 164,
    top: 1394,
    fontFamily: "Montserrat Alternates",
    fontWeight: "500",
    fontSize: 77,
    lineHeight: 94,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  rectangle17: {
    position: "absolute",
    left: "12.81%",
    right: "12.81%",
    top: "71.33%",
    bottom: "21.13%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  tutorials: {
    position: "absolute",
    width: 952,
    height: 118,
    left: 164,
    top: 1602,
    fontFamily: "Montserrat Alternates",
    fontWeight: "500",
    fontSize: 77,
    lineHeight: 94,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  rectangle18: {
    position: "absolute",
    left: "2.97%",
    right: "2.97%",
    top: "45.71%",
    bottom: "42.03%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  fitCheckTracker: {
    position: "absolute",
    width: 1204,
    height: 118,
    left: 56,
    top: 1078,
    fontFamily: "Montserrat Alternates",
    fontWeight: "800",
    fontSize: 110,
    lineHeight: 134,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  rectangle19: {
    position: "absolute",
    left: "12.81%",
    right: "12.81%",
    top: "80.87%",
    bottom: "11.59%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  fitCheckStore: {
    position: "absolute",
    width: 952,
    height: 118,
    left: 164,
    top: 1810,
    fontFamily: "Montserrat Alternates",
    fontWeight: "500",
    fontSize: 77,
    lineHeight: 94,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  fitcheck1: {
    position: "absolute",
    width: 783,
    height: 707,
    left: 225,
    top: 101,
  },
});

export { Home };
