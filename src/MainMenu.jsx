import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/goat_logo.png")} style={styles.Icon} />

      {/* Tracker Button */}
      <View style={styles.trackerButton}>
        <Text style={styles.trackerText}>Workout Tracker</Text>
      </View>

      {/* Planner Button */}
      <View style={styles.plannerButton}>
        <Text style={styles.plannerText}>Workout Planner</Text>
      </View>

      {/* Tutorials Button */}
      <View style={styles.tutorialsButton}>
        <Text style={styles.tutorialsText}>Tutorials</Text>
      </View>

      {/* Store Button */}
      <View style={styles.storeButton}>
        <Text style={styles.storeText}>GOAT Store</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#C2BFD9",
    alignItems: "center",
  },
  placeholderLogo: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
  trackerButton: {
    position: "absolute",
    width: "94%",
    height: 238,
    top: 900,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: 192,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  trackerText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: 110,
    lineHeight: 124,
    textAlign: "center",
    color: "#242833",
  },
  plannerButton: {
    position: "absolute",
    width: "94%",
    height: 238,
    top: 1200,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: 192,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  plannerText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: 110,
    lineHeight: 124,
    textAlign: "center",
    color: "#242833",
  },
  tutorialsButton: {
    position: "absolute",
    width: "94%",
    height: 238,
    top: 1500,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: 192,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  tutorialsText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: 110,
    lineHeight: 124,
    textAlign: "center",
    color: "#242833",
  },
  storeButton: {
    position: "absolute",
    width: "94%",
    height: 238,
    top: 1800,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: 192,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  storeText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: 110,
    lineHeight: 124,
    textAlign: "center",
    color: "#242833",
  },
});

export { MainMenu };
