import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ScoreDisplay: {
    position: "absolute",
    width: 100,
    height: 269,
    right: 300,
    top: 75,
  },
  Rectangle6: {
    position: "absolute",
    width: 200,
    height: 200,
    left: 0,
    top: 0,
    backgroundColor: "#D9D9D9",
    borderWidth: 6,
    borderColor: "#450A0A",
    borderRadius: 24,
  },
  ScoreText: {
    position: "absolute",
    width: 193,
    height: 77,
    left: 25,
    top: 0,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 77,
    color: "#083344",
  },
  LetterS: {
    position: "absolute",
    width: 100,
    height: 155,
    left: 35,
    top: 50,
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 36,
    lineHeight: 155,
    color: "#450A0A",
  },
});

function Score(props) {
  return (
    <View style={styles.ScoreDisplay}>
      <View style={styles.Rectangle6} />
      <Text style={styles.LetterS}>{props.score}</Text>
      <Text style={styles.ScoreText}>Score:</Text>
    </View>
  );
}

export { Score };
