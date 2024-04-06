import { React, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "react-native-svg";

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
    backgroundColor: "#C2BFD9",
  },

  /////////////////////////////THE ENGINE :b
  settingsButton: {
    position: "absolute",
    width: "45%",
    height: scaledHeight(208),
    left: scaledLeft(650),
    top: scaledTop(1935),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(205),
  },
  settingIcon: {
    width: scaledImageWidth,
    height: scaledImageHeight,
    marginTop: scaledHeight(10),
    marginLeft: scaledLeft(200),
    resizeMode: "contain",
  },

  ////////////////////BACK ICON, THE ARROW LEFT
  backButton: {
    position: "absolute",
    width: "45%",
    height: scaledHeight(208),
    left: scaledLeft(30),
    top: scaledTop(1935),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(205),
  },
  backIcon: {
    width: scaledImageWidth,
    height: scaledImageHeight,
    resizeMode: "contain",
    marginTop: scaledHeight(10),
    marginLeft: scaledLeft(200),
  },
  ///////////////////////// WHAT IS A KILOMETER!!!!!!!!!!!!???
  trackingButton: {
    position: "absolute",
    width: "94%",
    height: scaledHeight(214),
    left: scaledLeft(45),
    top: scaledTop(1600),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(192),
  },
  trackingText: {
    position: "absolute",
    width: scaledSize(896), // Assuming a similar width as trackingText for consistency
    height: scaledHeight(100),
    left: scaledLeft(103), // Adjusted for consistency
    top: scaledTop(1650),
    fontFamily: "Courier Prime",
    fontWeight: "400",
    fontSize: scaledSize(96),
    lineHeight: scaledSize(108),
    textAlign: "center",
    color: "#242833",
  },

  //////////////////////////// ADD DEVICE AHAHAHAHAHAHAHAHAHAHHAAUDYSBGIHPOWFUBDSVJGBFAWUOSHCIUBJKQWAS
  addDeviceButton: {
    position: "absolute",
    width: scaledSize(896),
    height: scaledHeight(180),
    left: scaledLeft(200),
    top: scaledTop(1150),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(192),
  },
  addDeviceText: {
    position: "absolute",
    width: scaledSize(896),
    height: scaledHeight(100),
    marginTop: scaledHeight(20),
    fontWeight: "400",
    fontSize: scaledSize(80),
    lineHeight: scaledSize(108),
    textAlign: "center",
    color: "#242833",
  },

  //////////////// DEVICEEE BELOW THE GRAD REP AND  ROUDN
  deviceDisplay: {
    position: "absolute",
    width: scaledSize(1237),
    height: scaledHeight(575),
    left: scaledLeft(21),
    top: scaledTop(534),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(192),
  },
  customDeviceIcon: {
    position: "absolute",
    width: scaledSize(400),
    height: scaledHeight(302),
    left: scaledLeft(5),
    top: scaledTop(10),
    backgroundColor: "#F8F7FF",
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
    width: scaledSize(399),
    height: scaledHeight(318),
    left: scaledLeft(40),
    top: scaledTop(180),
    bottom: scaledSize(77),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(278),
  },
  gradeLabel: {
    position: "absolute",
    width: scaledSize(313),
    height: scaledHeight(100),
    left: scaledLeft(23),
    marginTop: 10,
    fontFamily: "Courier Prime",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    color: "#242833",
  },
  gradeDisplay: {
    fontFamily: "Courier Prime",
    fontWeight: "800",
    fontSize: scaledSize(150),
    lineHeight: scaledSize(170),
    textAlign: "center",
    marginTop: 45,
    color: "#242833",
  },

  ////////////////////////REP////////////////////////////
  repBubble: {
    position: "absolute",
    width: scaledSize(399),
    height: scaledHeight(318),
    left: scaledLeft(440),
    top: scaledTop(180),
    bottom: scaledSize(77),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(278),
  },
  repLabel: {
    fontFamily: "Courier Prime",
    fontWeight: "400",
    fontSize: scaledSize(64),
    lineHeight: scaledSize(72),
    textAlign: "center",
    marginTop: 18,
    color: "#242833",
  },
  repDisplay: {
    fontFamily: "Courier Prime",
    fontWeight: "800",
    fontSize: scaledSize(150),
    lineHeight: scaledSize(170),
    textAlign: "center",
    marginTop: 5,
    color: "#242833",
  },

  /////////////ROUND////////////////////////////
  roundBubble: {
    position: "absolute",
    width: scaledSize(399),
    height: scaledHeight(318),
    left: scaledLeft(840),
    top: scaledTop(180),
    bottom: scaledSize(77),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(278),
  },
  roundLabel: {
    fontFamily: "Courier Prime",
    fontWeight: "400",
    fontSize: scaledSize(64),
    lineHeight: scaledSize(72),
    textAlign: "center",
    marginTop: 18,
    color: "#242833",
  },
  roundDisplay: {
    fontFamily: "Courier Prime",
    fontWeight: "800",
    fontSize: scaledSize(150),
    lineHeight: scaledSize(170),
    textAlign: "center",
    marginTop: 5,
    color: "#242833",
  },
});

function Tracker(props) {
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
    <View style={styles.tracker}>
      <View style={styles.settingsButton}>
        {/* Setting Button */}
        <Image
          source={require("../assets/settings_icon.png")}
          style={styles.settingIcon}
        />
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => props.setCurrentPage("mainMenu")}>
          <Image
            source={require("../assets/back_icon.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={startTracking}>
        <View style={styles.trackingButton}></View>
        <Text style={styles.trackingText}>{trackingText()}</Text>
      </TouchableOpacity>

      <View style={styles.deviceDisplay}></View>
      <View style={styles.addDeviceButton}>
        <Text style={styles.addDeviceText}>+ Add Device</Text>
      </View>
      <View style={styles.gradeBubble}>
        <Text style={styles.gradeLabel}>Grade </Text>
        <Text style={styles.gradeDisplay}>{showScore()}</Text>
      </View>

      <View style={styles.repBubble}>
        <Text style={styles.repLabel}>Rep</Text>
        <Text style={styles.repDisplay}>{rep()}</Text>
      </View>

      <View style={styles.roundBubble}>
        <Text style={styles.roundLabel}>Time</Text>
        <Text style={styles.roundDisplay}>{round()}</Text>
      </View>
    </View>
  );
}

export { Tracker };
