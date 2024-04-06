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
  const fitCheckButton = () => {
    props.setCurrentPage("fitCheck");
  };
  const goatButton = () => {
    props.setCurrentPage("GOAT");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.trackerButton]}>
        <TouchableOpacity onPress={trackerButton}>
          <Text style={styles.trackerText}>Regular Tracker</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.plannerButton]}>
        <TouchableOpacity onPress={goatButton}>
          <Image
            source={require("../assets/goat_logo.png")}
            style={styles.placeholderLogo}
          />
          <Text style={styles.plannerText}>GOAT Tracker</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.tutorialsButton]}>
        <TouchableOpacity onPress={fitCheckButton}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.placeholderLogo}
          />
          <Text style={styles.tutorialsText}>fitCheck Tracker</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.storeButton]}>
        <Text style={styles.storeText}>GOAT Store</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C2BFD9",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: scaledHeight(50),
  },
  placeholderLogo: {
    height: scaledHeight(300),
    width: scaledSize(300),
    alignSelf: "center",
    resizeMode: "contain",
  },
  trackerButton: {
    flex: 1,
    width: "94%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: scaledHeight(50),
    justifyContent: "center", // Add this line
  },

  trackerText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    color: "#242833",
  },
  plannerButton: {
    flex: 2,
    width: "94%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: scaledHeight(50),
    justifyContent: "center", // Add this line
  },
  plannerText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    color: "#242833",
  },
  tutorialsButton: {
    flex: 2,
    width: "94%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: scaledHeight(50),
    justifyContent: "center", // Add this line
  },
  tutorialsText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    color: "#242833",
  },
  storeButton: {
    width: "94%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#242833",
    borderWidth: 8,
    borderRadius: scaledSize(192),
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: scaledHeight(50),
    flex: 1,
    justifyContent: "center", // Add this line
  },
  storeText: {
    fontFamily: "Courier Prime",
    fontWeight: "700",
    fontSize: scaledSize(110),
    lineHeight: scaledSize(124),
    textAlign: "center",
    color: "#242833",
  },
});

export { MainMenu };
