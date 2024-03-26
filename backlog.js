import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; // Assuming you saved the styles in a file named styles.js

const YourComponent = () => {
  return (
    <View style={styles.calibrateScreen}>
      <View style={styles.backButton}>
        {/* Your back button content */}
      </View>
      {/* Other components styled similarly */}
    </View>
  );
};

export default YourComponent;
