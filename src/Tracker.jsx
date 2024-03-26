import { StyleSheet, View, Text } from "react-native";
const styles = StyleSheet.create({
  tracker: {
    position: "relative",
    width: 1280,
    height: 2201,
    backgroundColor: "#C2BFD9",
  },
  settingsButton: {
    position: "absolute",
    width: 475,
    height: 208,
    left: 693,
    top: 1935,
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 205,
  },
  settingIcon: {
    position: "absolute",
    width: 214,
    height: 192,
    left: 824,
    top: 1943,
    // Assuming background images are not supported, use backgroundColor instead
    backgroundColor: "#F8F7FF", // Replace with your background image logic
    // backgroundBlendMode: 'screen', // Not supported in React Native
    // mixBlendMode: 'hard-light', // Not supported in React Native
  },
  backButton: {
    position: "absolute",
    width: 521,
    height: 208,
    left: 124,
    top: 1935,
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 205,
  },
  backIcon: {
    position: "absolute",
    width: 166,
    height: 160,
    left: 301,
    top: 1961,
    // Assuming background images are not supported, use backgroundColor instead
    backgroundColor: "#F8F7FF", // Replace with your background image logic
    // mixBlendMode: 'darken', // Not supported in React Native
  },
  trackingButton: {
    position: "absolute",
    left: "3.67%",
    right: "2.27%",
    top: "74.73%",
    bottom: "15.54%",
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 278,
  },
  trackingText: {
    position: "absolute",
    width: 896,
    height: 100,
    left: 237,
    top: 1702,
    fontFamily: "Courier Prime",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 96,
    lineHeight: 108,
    textAlign: "center",
    color: "#242833",
  },
  // Add more styles here as needed
  addDeviceButton: {
    position: "absolute",
    width: 950,
    height: 221,
    left: 155,
    top: 976.17,
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 192,
  },
  addDeviceText: {
    position: "absolute",
    width: 896,
    height: 100,
    left: 203,
    top: 1036.17,
    fontFamily: "Courier Prime",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 96,
    lineHeight: 108,
    textAlign: "center",
    color: "#242833",
  },
  deviceDisplay: {
    position: "absolute",
    width: 1237,
    height: 375,
    left: 21,
    top: 534.17,
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 192,
  },
  customDeviceIcon: {
    position: "absolute",
    width: 319,
    height: 302,
    left: 53,
    top: 577.17,
    backgroundColor: "#F8F7FF",
    borderWidth: 7,
    borderColor: "#242833",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 186,
  },
  gradeBubble: {
    position: "absolute",
    left: "1.64%",
    right: "67.27%",
    top: "8.19%",
    bottom: "77.35%",
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 278,
  },
  gradeLabel: {
    position: "absolute",
    width: 313,
    height: 100,
    left: 59,
    top: 239.17,
    fontFamily: "Courier Prime",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 72,
    textAlign: "center",
    color: "#242833",
  },
  gradeDisplay: {
    position: "absolute",
    width: 226,
    height: 171,
    left: 104,
    top: 314.17,
    fontFamily: "Courier Prime",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 128,
    lineHeight: 144,
    textAlign: "center",
    color: "#242833",
  },
  repBubble: {
    position: "absolute",
    left: "34.38%",
    right: "34.45%",
    top: "8.18%",
    bottom: "77.36%",
    backgroundColor: "#F8F7FF",
    borderWidth: 8,
    borderColor: "#242833",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    borderRadius: 278,
  },
  repLabel: {
    position: "absolute",
    width: 313,
    height: 100,
    left: 480,
    top: 224.17,
  },
});
function Tracker() {
  return (
    <View style={styles.tracker}>
      {/* Settings Button */}
      <View style={styles.settingsButton}>
        {/* Setting Icon */}
        <View style={styles.settingIcon}></View>
      </View>

      {/* Back Button */}
      <View style={styles.backButton}>
        {/* Back Icon */}
        <View style={styles.backIcon}></View>
      </View>

      {/* Tracking Button */}
      <View style={styles.trackingButton}></View>

      {/* Tracking Text */}
      <Text style={styles.trackingText}>Tracking Text</Text>

      {/* Add Device Button */}
      <View style={styles.addDeviceButton}>
        {/* Add Device Text */}
        <Text style={styles.addDeviceText}>Add Device Text</Text>
      </View>

      {/* Device Display */}
      <View style={styles.deviceDisplay}></View>

      {/* Custom Device Icon */}
      <View style={styles.customDeviceIcon}></View>

      {/* Grade Bubble */}
      <View style={styles.gradeBubble}>
        {/* Grade Label */}
        <Text style={styles.gradeLabel}>Grade Label</Text>
        {/* Grade Display */}
        <Text style={styles.gradeDisplay}>Grade Display</Text>
      </View>

      {/* Rep Bubble */}
      <View style={styles.repBubble}>
        {/* Rep Label */}
        <Text style={styles.repLabel}>Rep Label</Text>
        {/* Rep Display */}
        <Text style={styles.repDisplay}>Rep Display</Text>
      </View>

      {/* Round Bubble */}
      <View style={styles.roundBubble}>
        {/* Round Label */}
        <Text style={styles.roundLabel}>Round Label</Text>
        {/* Round Display */}
        <Text style={styles.roundDisplay}>Round Display</Text>
      </View>

      {/* Exercise Bubble */}
      <View style={styles.exerciseBubble}>
        {/* Exercise Label */}
        <Text style={styles.exerciseLabel}>Exercise Label</Text>
      </View>
    </View>
  );
}

export { Tracker };
