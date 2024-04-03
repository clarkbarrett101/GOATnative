import { React, useEffect } from "react";
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

const styles = StyleSheet.create({
  tracker: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  textContainer: {
    position: "absolute",
    width: 313,
    height: 100,
    left: 465,
    top: 106,
  },
  text: {
    fontFamily: "Oxanium",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 64,
    lineHeight: 80,
    textAlign: "center",
    color: "#830000",
  },
});
/* Rectangle 9 */

function FitCheckTracker(props) {
  function startTracking() {
    if (props.appMode === "idle") {
      props.setAppMode("recording");
    } else {
      props.setAppMode("idle");
    }
  }
  function trackingText() {
    if (props.appMode === "recording") {
      return "Recording...";
    } else if (props.appMode === "comparing") {
      return "Tracking...";
    } else {
      return "Start Tracking";
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
      <LinearGradient style={styles.tracker} colors={["#1E1313", "#472A2A"]}>
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

        <LinearGradient
          style={styles.trackingButton}
          colors={["#9E00FF", "#FF7F56"]}
        >
          <TouchableOpacity onPress={startTracking}>
            <Text style={styles.trackingText}>{trackingText()}</Text>
          </TouchableOpacity>
        </LinearGradient>

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

export { FitCheckTracker };
