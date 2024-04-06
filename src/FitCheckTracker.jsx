import { React, useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Get device screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Define desired target resolution
const targetWidth = 1280;
const targetHeight = 2228;

// Calculate scale factors
const widthScale = screenWidth / targetWidth;
const heightScale = screenHeight / targetHeight;

const scaledSize = (size) => Math.ceil(size * widthScale);
const scaledHeight = (height) => Math.ceil(height * heightScale);
const scaledTop = (top) => Math.ceil(top * heightScale);
const scaledLeft = (left) => Math.ceil(left * widthScale);

const originalImageWidth = 166;
const originalImageHeight = 160;

// Calculate scaled dimensions for the image
const imageScale = Math.min(widthScale, heightScale);
const scaledImageWidth = originalImageWidth * imageScale;
const scaledImageHeight = originalImageHeight * imageScale;

function FitCheckTracker(props) {
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
          source={require("../assets/fc Record.png")}
          style={styles.trackingButton}
        />
      );
    } else if (props.appMode === "comparing") {
      return (
        <Image
          source={require("../assets/fc Compare.png")}
          style={styles.trackingButton}
        />
      );
    } else {
      return (
        <Image
          source={require("../assets/fc start.png")}
          style={styles.trackingButton}
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
      <LinearGradient style={styles.tracker} colors={["#FF9AB6", "#CEAFFF"]}>
        <LinearGradient
          style={styles.settingsButton}
          colors={["#9E00FF", "#FF7F56"]}
        >
          {/* Setting Button */}
          <Image
            source={require("../assets/settings_icon_white.png")}
            style={styles.settingIcon}
          />
        </LinearGradient>

        <LinearGradient
          style={styles.backButton}
          colors={["#9E00FF", "#FF7F56"]}
        >
          <TouchableOpacity onPress={() => props.setCurrentPage("mainMenu")}>
            <Image
              source={require("../assets/back_icon_white.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity onPressIn={startTracking}>
          <>{trackingText()}</>
        </TouchableOpacity>

        <LinearGradient
          style={styles.deviceDisplay}
          colors={["#9E00FF", "#FF7F56"]}
        ></LinearGradient>

        <LinearGradient
          style={styles.gradeBubble}
          colors={["#9E00FF", "#FF7F56"]}
        >
          <Text style={styles.gradeLabel}>Grade </Text>
          <Text style={styles.gradeDisplay}>{showScore()}</Text>
        </LinearGradient>

        <LinearGradient
          style={styles.repBubble}
          colors={["#9E00FF", "#FF7F56"]}
        >
          <Text style={styles.repLabel}>Rep</Text>
          <Text style={styles.repDisplay}>{rep()}</Text>
        </LinearGradient>

        <LinearGradient
          style={styles.roundBubble}
          colors={["#9E00FF", "#FF7F56"]}
        >
          <Text style={styles.roundLabel}>Time</Text>
          <Text style={styles.roundDisplay}>{round()}</Text>
        </LinearGradient>

        <LinearGradient
          style={styles.addDeviceButton}
          colors={["#9E00FF", "#FF7F56"]}
        >
          <Text style={styles.addDeviceText}>+ Add Device</Text>
        </LinearGradient>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  tracker: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  /////////////////////////////THE ENGINE :b
  settingsButton: {
    position: "absolute",
    width: "45%",
    height: scaledHeight(208),
    left: scaledLeft(650),
    top: scaledTop(1935),

    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    borderRadius: 192,
  },
  settingIcon: {
    alignSelf: "center",
    width: scaledImageWidth,
    height: scaledImageHeight,

    marginTop: 10,
    resizeMode: "contain",
  },

  ////////////////////BACK ICON, THE ARROW LEFT
  backButton: {
    position: "absolute",
    width: "45%",
    height: scaledHeight(208),
    left: scaledLeft(30),
    top: scaledTop(1935),

    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    borderRadius: 192,
  },
  backIcon: {
    alignSelf: "center",
    width: scaledImageWidth,
    height: scaledImageHeight,
    resizeMode: "contain",
    marginTop: 10,
    zIndex: 5,
  },
  ///////////////////////// WHAT IS A KILOMETER!!!!!!!!!!!!???
  trackingButton: {
    width: "94%",
    height: scaledHeight(221),
    resizeMode: "contain",
    left: scaledLeft(45),
    top: scaledTop(1600),
  },
  trackingText: {
    position: "absolute",
    width: scaledSize(896), // Assuming a similar width as trackingText for consistency
    height: scaledHeight(100),
    left: scaledLeft(103), // Adjusted for consistency
    marginTop: 20,
    fontSize: scaledSize(96),
    lineHeight: scaledSize(108),
    textAlign: "center",
    color: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
  },

  //////////////////////////// ADD DEVICE AHAHAHAHAHAHAHAHAHAHHAAUDYSBGIHPOWFUBDSVJGBFAWUOSHCIUBJKQWAS
  addDeviceButton: {
    position: "absolute",
    width: "94%",
    height: scaledHeight(221),
    left: scaledLeft(45),
    top: scaledTop(1200),

    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    borderRadius: 192,
  },
  addDeviceText: {
    position: "absolute",
    width: scaledSize(896),
    height: scaledHeight(100),
    left: scaledLeft(103),
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,

    fontSize: scaledSize(96),
    lineHeight: scaledSize(108),
    textAlign: "center",
    color: "#FFFFFF",
  },

  //////////////// DEVICEEE BELOW THE GRAD REP AND  ROUDN
  deviceDisplay: {
    position: "absolute",
    width: scaledSize(1237),
    height: scaledHeight(575),
    left: scaledLeft(21),
    top: scaledTop(534),

    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    borderRadius: 192,
  },
  customDeviceIcon: {
    position: "absolute",
    width: scaledSize(400),
    height: scaledHeight(302),
    left: scaledLeft(5),
    top: scaledTop(10),

    borderWidth: 7,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(1000),
  },
  ///////////////////////GRADE///////////////////////////////
  gradeBubble: {
    position: "absolute",
    width: scaledSize(375),
    height: scaledHeight(318),
    left: scaledLeft(40),
    top: scaledTop(180),
    bottom: scaledSize(77),

    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    borderRadius: 192,
  },
  gradeLabel: {
    position: "absolute",
    width: scaledSize(313),
    height: scaledHeight(100),
    left: scaledLeft(23),
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    fontStyle: "normal",

    fontSize: scaledSize(64),
    textAlign: "center",
    color: "#FFFFFF",
  },
  gradeDisplay: {
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    fontSize: scaledSize(150),
    lineHeight: scaledSize(170),
    textAlign: "center",
    marginTop: 45,
    color: "#FFFFFF",
  },

  ////////////////////////REP////////////////////////////
  repBubble: {
    position: "absolute",
    width: scaledSize(399),
    height: scaledHeight(318),
    left: scaledLeft(440),
    top: scaledTop(180),
    bottom: scaledSize(77),
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    borderRadius: 192,
  },
  repLabel: {
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,

    fontSize: scaledSize(64),
    lineHeight: scaledSize(72),
    textAlign: "center",
    marginTop: 18,
    color: "#FFFFFF",
  },
  repDisplay: {
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,

    fontSize: scaledSize(150),
    lineHeight: scaledSize(170),
    textAlign: "center",
    marginTop: 5,
    color: "#FFFFFF",
  },

  /////////////ROUND////////////////////////////
  roundBubble: {
    position: "absolute",
    width: scaledSize(375),
    height: scaledHeight(318),
    left: scaledLeft(865),
    top: scaledTop(180),
    bottom: scaledSize(77),

    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    borderRadius: 192,
  },
  roundLabel: {
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,

    fontSize: scaledSize(64),
    lineHeight: scaledSize(72),
    textAlign: "center",
    marginTop: 18,
    color: "#FFFFFF",
  },
  roundDisplay: {
    shadowColor: "#000",
    shadowOffset: { width: scaledSize(6), height: scaledHeight(9) },
    shadowOpacity: 0.71,
    fontSize: scaledSize(150),
    lineHeight: scaledSize(170),
    textAlign: "center",
    marginTop: 5,
    color: "#FFFFFF",
  },
});

export { FitCheckTracker };
