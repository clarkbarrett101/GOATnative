// SettingsPage.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Meter from './Meter'; // Import the Meter subcomponent

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      {/* Include multiple Meter subcomponents with different labels */}
      <Meter label="Meter 1" />
      <Meter label="Meter 2" />
      <Meter label="Meter 3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsPage;
