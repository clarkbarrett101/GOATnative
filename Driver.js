// src/Driver.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Backdrop from './Backdrop';
import BLE from './BLE';
import Calibration from './Calibration';
import CompareButton from './CompareButton';
import MainMenu from './Mainmenu';
import Meter from './Meter';
import OldGoat from './OldGoat';
import RecordButton from './RecordButton';
import Reel from './Reel';
import Score from './Score';
import Settings from './Settings';
import Tracker from './Tracker';
import FitCheckTracker from './Fitchecktracker';
import GoatTracker from './Goattracker';
import Gyro from './Gyro';

const Stack = createStackNavigator();

const Driver = () => {
  const [appMode, setAppMode] = useState('idle');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Tracker" component={Tracker} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="BLE" component={BLE} />
        <Stack.Screen name="Calibration" component={Calibration} />
        <Stack.Screen name="Fitchecktracker" component={FitCheckTracker} />
        <Stack.Screen name="Goattracker" component={GoatTracker} />
        <Stack.Screen name="Gyro" component={Gyro} />
        <Stack.Screen name="Meter" component={Meter} />
        <Stack.Screen name="Oldgoat" component={OldGoat} />
        <Stack.Screen name="RecordButton" component={RecordButton} />
        <Stack.Screen name="Reel" component={Reel} />
        <Stack.Screen name="Score" component={Score} />
        <Stack.Screen name="Backdrop" component={Backdrop} />
      </Stack.Navigator>
      <CompareButton appMode={appMode} setAppMode={setAppMode} />
    </NavigationContainer>
  );
};

export default Driver;

