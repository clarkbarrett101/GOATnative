import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

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
  calibrateScreen: {
    position: "relative",
    width: screenWidth, // Use full screen width
    height: screenHeight, // Use full screen height
    backgroundColor: "#C2BFD9",
  },
  backButton: {
    position: "absolute",
    width: "45%",
    height: scaledHeight(208),
    left: scaledLeft(340),
    top: scaledTop(1931),
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
    marginLeft: scaledSize(170),
    marginTop: scaledSize(25),
  },
  gradeBubble: {
    position: "absolute",
    left: scaledLeft(1280 * 0.0516), // Calculate percentage based on the original design
    right: scaledLeft(1280 * 0.0523),
    top: scaledTop(2201 * 0.2045),
    bottom: scaledHeight(2201 * 0.4366),
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(300),
  },
  gradeLabel: {
    position: "absolute",
    fontFamily: "Courier Prime",
    fontWeight: "400",
    fontSize: scaledSize(94),
    lineHeight: scaledSize(94),
    marginTop: scaledSize(250),
    marginLeft: scaledSize(60),
    textAlign: "center",
    color: "#242833",
  },
  additionalText: {
    position: "absolute",
    width: "100%", // Full width
    height: "auto", // Auto height for text content
    bottom: scaledSize(20),
    fontFamily: "Courier Prime",
    fontSize: scaledSize(24),
    lineHeight: scaledSize(32),
    textAlign: "center",
    color: "#242833",
  },
  calibrationInstruction: {
    position: "absolute",
    width: "100%", // Full width
    height: "auto", // Auto height for text content
    bottom: scaledSize(60),
    fontFamily: "Courier Prime",
    fontSize: scaledSize(24),
    lineHeight: scaledSize(32),
    textAlign: "center",
    color: "#242833",
  },
  customDeviceIcon: {
    position: "absolute",
    width: "65%",
    height: scaledHeight(224),
    left: scaledLeft(200),
    top: scaledTop(525),
    backgroundColor: "#C2BFD9",
    borderWidth: 7,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: scaledSize(186),
  },
  repLabel: {
    position: "absolute",
    width: scaledSize(423),
    height: scaledHeight(72),
    fontFamily: "Courier Prime",
    fontWeight: "400",
    fontSize: scaledSize(94),
    lineHeight: scaledSize(92),
    marginTop: scaledSize(70),
    marginLeft: scaledSize(110),
    textAlign: "center",
    color: "#242833",
  },
  // Add more scaled styles as needed
});

const Calibration = () => {
  return (
    <View style={styles.calibrateScreen}>
      <View style={styles.backButton}>
        <Image
          source={require("../assets/back_icon.png")}
          style={styles.backIcon}
        />
      </View>

      <View style={styles.gradeBubble}>
        <View style={styles.customDeviceIcon}>
          <Text style={styles.repLabel}>Calibrate</Text>
        </View>
        <Text style={styles.gradeLabel}>
          Place the device down on an unmoving surface and press “Calibrate”
        </Text>
      </View>
    </View>
  );
};
export { Calibration };
