import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

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

const originalImageWidth = 741; // Replace with your image's actual width
const originalImageHeight = 749; // Replace with your image's actual height

// Calculate scaled dimensions for the image
const imageScale = Math.min(widthScale, heightScale);
const scaledImageWidth = originalImageWidth * imageScale;
const scaledImageHeight = originalImageHeight * imageScale;
const MainMenu = (props) => {
  const trackerButton = () => {
    props.setCurrentPage("tracker");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/goat_logo.png")}
        style={styles.placeholderLogo}
      />
      <View
        style={[
          styles.trackerButton,
          { top: scaledTop(900), height: scaledHeight(238) },
        ]}
      >
        <TouchableOpacity onPress={trackerButton}>
          <Text style={styles.trackerText}>Regular Tracker</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.plannerButton,
          { top: scaledTop(1200), height: scaledHeight(238) },
        ]}
      >
        <Text style={styles.plannerText}>GOAT Tracker</Text>
      </View>

      <View
        style={[
          styles.tutorialsButton,
          { top: scaledTop(1500), height: scaledHeight(238) },
        ]}
      >
        <Text style={styles.tutorialsText}>fitCheck Tracker</Text>
      </View>

      <View
        style={[
          styles.storeButton,
          { top: scaledTop(1800), height: scaledHeight(238) },
        ]}
      >
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
    width: scaledImageWidth,
    height: scaledImageHeight,
    resizeMode: "contain",
    marginTop: 70,
  },
  trackerButton: {
    position: "absolute",
    width: "94%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  trackerText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    marginTop: 20,
    color: "#242833",
  },
  plannerButton: {
    position: "absolute",
    width: "94%",
    height: scaledHeight(238),
    top: scaledTop(1300),
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  plannerText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    marginTop: 20,
    color: "#242833",
  },
  tutorialsButton: {
    position: "absolute",
    width: "94%",
    height: scaledHeight(238),
    top: scaledTop(1500),
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  tutorialsText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    marginTop: 20,
    color: "#242833",
  },
  storeButton: {
    position: "absolute",
    width: "94%",
    height: scaledHeight(238),
    top: scaledTop(1800),
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  storeText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    marginTop: 20,
    color: "#242833",
  },
});

export { MainMenu };
