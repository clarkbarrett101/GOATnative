import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  LinearGradient,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const targetWidth = 1280;
const targetHeight = 2228;
const widthScale = screenWidth / targetWidth;
const heightScale = screenHeight / targetHeight;

const scaledSize = (size) => Math.ceil(size * widthScale);
const scaledHeight = (height) => Math.ceil(height * heightScale);
const scaledTop = (top) => Math.ceil(top * heightScale);
const scaledLeft = (left) => Math.ceil(left * widthScale);

const imageScale = Math.min(widthScale, heightScale);
const h_v_plaque = 448 * imageScale;
const w_v_plaque = 375 * imageScale;
const w_h_plaque = 1226 * imageScale;
const h_h_plaque = 243 * imageScale;
const w_big_plaque = 1131 * imageScale;
const h_big_plaque = 539 * imageScale;
const h_back_plaque = 267 * imageScale;
const w_back_plaque = 567 * imageScale;

// Calculate scaled dimensions for the image

function GoatTracker(props) {
  function back_button() {
    props.setCurrentPage("mainMenu");
  }
  function startTracking() {
    if (props.appMode === "idle") {
      props.setAppMode("recording");
      props.setCurrentFrame(0);
      props.setFrames([]);
    } else {
      props.setAppMode("idle");
    }
  }
  function trackingText() {
    if (props.appMode === "recording") {
      return (
        <Image
          source={require("../assets/gt record.png")}
          style={styles.track_label}
        />
      );
    } else if (props.appMode === "comparing") {
      return (
        <Image
          source={require("../assets/gt compare.png")}
          style={styles.track_label}
        />
      );
    } else {
      return (
        <Image
          source={require("../assets/gt start.png")}
          style={styles.track_label}
        />
      );
    }
  }
  useEffect(() => {
    trackingText();
  }, [props.appMode]);

  function showScore() {
    return Math.round(props.score);
  }
  useEffect(() => {
    showScore();
  }, [props.score]);
  useEffect(() => {
    round();
  }, [props.round]);
  function round() {
    return props.round / 10;
  }
  function rep() {
    return props.rep;
  }
  return (
    <>
      <Image
        source={require("../assets/background.png")}
        style={styles.background}
      />

      <Image
        style={styles.grade_label}
        source={require("../assets/V_Plaque.png")}
      />
      <Image
        style={styles.rep_label}
        source={require("../assets/V_Plaque.png")}
      />
      <Image
        style={styles.time_label}
        source={require("../assets/V_Plaque.png")}
      />
      <Image
        style={styles.graph}
        source={require("../assets/big_plaque.png")}
      />
      <Image
        style={styles.add_label}
        source={require("../assets/H_plaque.png")}
      />

      <TouchableOpacity style={styles.track_button} onPressIn={startTracking}>
        <>{trackingText()}</>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back_button} onPress={back_button}>
        <Image
          style={styles.back_icon}
          source={require("../assets/back_plaque.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.setting_button}
        source={require("../assets/settings_Plaque.png")}
      />

      <Text
        style={{
          position: "absolute",
          fontSize: scaledHeight(70),
          top: scaledTop(100),
          left: scaledLeft(100),
          textAlign: "center",
          color: "#830000",
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 3 },
          shadowOpacity: 0.71,
        }}
      >
        GRADE
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: scaledHeight(120),
          textAlign: "center",
          top: scaledTop(150),
          left: scaledLeft(100),
          color: "#830000",
        }}
      >
        {showScore()}
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: scaledHeight(70),
          top: scaledTop(100),
          left: scaledLeft(550),
          width: "auto",
          textAlign: "center",
          color: "#830000",
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 3 },
          shadowOpacity: 0.71,
        }}
      >
        REP
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: scaledHeight(120),
          textAlign: "center",
          top: scaledTop(150),
          left: scaledLeft(575),
          color: "#830000",
        }}
      >
        {rep()}
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: scaledHeight(70),
          top: scaledTop(100),
          left: scaledLeft(900),
          textAlign: "center",
          color: "#830000",
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 3 },
          shadowOpacity: 0.71,
        }}
      >
        TIME
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: scaledHeight(120),
          textAlign: "center",
          top: scaledTop(150),
          left: scaledLeft(900),
          color: "#830000",
        }}
      >
        {round()}
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: scaledHeight(64),
          top: scaledTop(1180),
          left: scaledLeft(280),
          textAlign: "center",
          color: "#830000",
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 3 },
          shadowOpacity: 0.71,
        }}
      >
        + Add a GOAT Device
      </Text>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    width: screenWidth,
    height: screenHeight,
    resizeMode: "stretch",
    flex: 1,
    zIndex: -1,
  },
  grade_label: {
    position: "absolute",
    width: w_v_plaque,
    height: h_v_plaque,
    left: scaledLeft(20),
    top: 0,
  },
  rep_label: {
    position: "absolute",
    width: w_v_plaque,
    height: h_v_plaque,
    left: scaledLeft(400),
    top: 0,
  },
  time_label: {
    position: "absolute",
    width: w_v_plaque,
    height: h_v_plaque,
    left: scaledLeft(780),
    top: 0,
  },
  graph: {
    position: "absolute",
    width: w_big_plaque * 1.1,
    height: h_big_plaque * 1.3,
    resizeMode: "stretch",
    left: scaledLeft(10),
    top: scaledTop(450),
  },
  add_label: {
    position: "absolute",
    width: w_h_plaque * 0.8,
    height: h_h_plaque * 0.8,
    left: scaledLeft(191),
    top: scaledTop(1100),
  },
  track_label: {
    position: "absolute",
    width: w_h_plaque,
    height: h_h_plaque,
    left: scaledLeft(60),
    top: scaledTop(1500),
    resizeMode: "contain",
  },
  track_button: {
    position: "absolute",
    width: w_h_plaque,
    height: h_h_plaque,
    left: scaledLeft(0),
    top: scaledTop(0),
  },
  back_button: {
    position: "absolute",
    width: w_back_plaque,
    height: h_back_plaque,
    left: scaledLeft(40),
    top: scaledTop(1880),
  },
  back_icon: {
    position: "absolute",
    width: w_back_plaque,
    height: h_back_plaque,
    left: scaledLeft(0),
    top: scaledTop(0),
  },
  setting_button: {
    position: "absolute",
    width: w_back_plaque,
    height: h_back_plaque,
    left: scaledLeft(650),
    top: scaledTop(1884),
  },
  text_big: {
    fontSize: scaledSize(64),
    color: "#830000",
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(14), height: scaledHeight(21) },
    shadowOpacity: 0.71,
  },
  text_med: {
    fontSize: scaledSize(48),
    color: "#830000",
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(14), height: scaledHeight(21) },
    shadowOpacity: 0.71,
  },
});

export { GoatTracker };
