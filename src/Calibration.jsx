import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  calibrateScreen: {
    position: 'relative',
    width: 1280,
    height: 2201,
    backgroundColor: '#C2BFD9',
  },
  backButton: {
    position: 'absolute',
    width: 521,
    height: 208,
    left: 359,
    top: 1931,
    backgroundColor: '#F8F7FF',
    borderWidth: 8,
    borderColor: '#242833',
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    borderRadius: 205,
  },
  backIcon: {
    position: 'absolute',
    width: 166,
    height: 160,
    left: 536,
    top: 1957,
    // You can't use 'background' here, React Native doesn't support 'url' like CSS
    // Instead, you'd use 'source' with an Image component
    // You'd import your image and use it like: source={require('./path_to_your_image')}
  },
  gradeBubble: {
    position: 'absolute',
    left: '5.16%',
    right: '5.23%',
    top: '20.45%',
    bottom: '43.66%',
    backgroundColor: '#F8F7FF',
    borderWidth: 8,
    borderColor: '#242833',
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    borderRadius: 278,
  },
  gradeLabel: {
    position: 'absolute',
    width: 1061,
    height: 216,
    left: 109,
    top: 651,
    fontFamily: 'Courier Prime',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 64,
    lineHeight: 72,
    textAlign: 'center',
    color: '#242833',
  },
  additionalText: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    bottom: 20,
    fontFamily: 'Courier Prime',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: '#242833',
  },
  calibrationInstruction: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    bottom: 60,
    fontFamily: 'Courier Prime',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: '#242833',
  },
  customDeviceIcon: {
    position: 'absolute',
    width: 553,
    height: 224,
    left: 359,
    top: 951,
    backgroundColor: '#C2BFD9',
    borderWidth: 7,
    borderColor: '#242833',
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    borderRadius: 186,
  },
  repLabel: {
    position: 'absolute',
    width: 423,
    height: 72,
    left: 428,
    top: 1027,
    fontFamily: 'Courier Prime',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 64,
    lineHeight: 72,
    textAlign: 'center',
    color: '#242833',
  },
});

const Calibration = () => {
  return (
    <View style={styles.calibrateScreen}>
      <View style={styles.backButton}>
        {/* Your back button content */}
      </View>
      {/* Other components styled similarly */}
    </View>
  );
};
export  {Calibration};
