import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("/Users/juan/GOATnative/fitcheck.png")}
        style={styles.fitcheck}
      >
        <View style={styles.tracker}>
          <View style={styles.rectangle9} />
          <View style={styles.rectangle21} />
          <View style={styles.rectangle16} />
          <View style={styles.rectangle20} />
          <View style={styles.rectangle6} />
          <View style={styles.rectangle10} />
          <View style={styles.rectangle22} />
          <View style={styles.rectangle23} />
          <Text style={styles.grade}>grade</Text>
          <Text style={styles.b}>B</Text>
          <Text style={styles.rep}>rep</Text>
          <Text style={styles.num4}>4</Text>
          <Text style={styles.round}>round</Text>
          <Text style={styles.numII}>II</Text>
          <View style={styles.image22} />
          <View style={styles.image23} />
          <View style={styles.rectangle21_2} />
          <Text style={styles.addFitCheckDevice}>Add a fitCheck device</Text>
          <Text style={styles.plus}>+</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 1280,
    height: 2201,
  },
  tracker: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  rectangle9: {
    position: "absolute",
    width: 1230,
    height: 308,
    left: 21,
    top: 388,
    backgroundColor: "transparent",
    borderRadius: 192,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  rectangle21: {
    position: "absolute",
    width: 475,
    height: 208,
    left: 693,
    top: 1935,
    backgroundColor: "transparent",
    borderRadius: 205,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  rectangle16: {
    position: "absolute",
    left: "3.67%",
    right: "2.27%",
    top: "74.73%",
    bottom: "15.54%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  rectangle20: {
    position: "absolute",
    width: 521,
    height: 208,
    left: 124,
    top: 1935,
    backgroundColor: "transparent",
    borderRadius: 205,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  rectangle6: {
    position: "absolute",
    width: 271,
    height: 248,
    left: 51,
    top: 423,
    backgroundColor: "transparent",
    borderRadius: 186,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  rectangle10: {
    position: "absolute",
    left: "1.64%",
    right: "67.27%",
    top: "1.54%",
    bottom: "84%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  rectangle22: {
    position: "absolute",
    left: "34.38%",
    right: "34.45%",
    top: "1.54%",
    bottom: "84%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  rectangle23: {
    position: "absolute",
    left: "67.19%",
    right: "1.72%",
    top: "1.54%",
    bottom: "84%",
    backgroundColor: "transparent",
    borderRadius: 278,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  grade: {
    position: "absolute",
    width: 313,
    height: 100,
    left: 64,
    top: 83,
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 78,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  b: {
    position: "absolute",
    width: 226,
    height: 171,
    left: 110,
    top: 133.17,
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 178,
    lineHeight: 217,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  rep: {
    position: "absolute",
    width: 313,
    height: 100,
    left: 483,
    top: 83,
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 78,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  num4: {
    position: "absolute",
    width: 226,
    height: 171,
    left: 529,
    top: 133,
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 178,
    lineHeight: 217,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  round: {
    position: "absolute",
    width: 314,
    height: 100,
    left: 902,
    top: 83,
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 78,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  numII: {
    position: "absolute",
    width: 226,
    height: 171,
    left: 948,
    top: 133,
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 178,
    lineHeight: 217,
    textAlign: "center",
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  image22: {
    position: "absolute",
    width: 150,
    height: 160,
    left: 854,
    top: 1957,
    backgroundColor: "transparent",
    mixBlendMode: "normal",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  image23: {
    position: "absolute",
    width: 166,
    height: 160,
    left: 291,
    top: 1957,
    backgroundColor: "transparent",
    mixBlendMode: "normal",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  rectangle21_2: {
    position: "absolute",
    width: 911,
    height: 159,
    left: 184,
    top: 798,
    backgroundColor: "transparent",
    borderRadius: 205,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 14,
      height: 21,
    },
    shadowRadius: 7.1,
  },
  addFitCheckDevice: {
    position: "absolute",
    width: 753,
    height: 108,
    left: 342,
    top: 835,
    fontFamily: "Montserrat Alternates",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 78,
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
  plus: {
    position: "absolute",
    width: 98,
    height: 170,
    left: 226,
    top: 767,
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 180,
    lineHeight: 219,
    color: "#FFFFFF",
    mixBlendMode: "normal",
  },
});

export { Home };
