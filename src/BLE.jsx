import { useMemo, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from "react-native-ble-plx";

import * as ExpoDevice from "expo-device";

import base64 from "react-native-base64";
function BLEconnector() {
  const serviceUUID = "0f80893b-3276-4851-adf4-53395fc05ffe";
  const characteristicUUIDs = ["0001", "0002", "0003", "0004", "0005", "0006"];
  const bleManager = new BleManager();
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [dataArray, setDataArray] = useState(0);

  requestBluetoothPermission = async () => {
    if (Platform.OS === "ios") {
      return true;
    }
    if (
      Platform.OS === "android" &&
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    ) {
      const apiLevel = parseInt(Platform.Version.toString(), 10);

      if (apiLevel < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        console.log("Permission Granted");
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
      if (
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN &&
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
      ) {
        const result = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);

        return (
          result["android.permission.BLUETOOTH_CONNECT"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result["android.permission.BLUETOOTH_SCAN"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result["android.permission.ACCESS_FINE_LOCATION"] ===
            PermissionsAndroid.RESULTS.GRANTED
        );
      }
    }

    this.showErrorToast("Permission have not been granted");

    return false;
  };

  function scanForPeripherals() {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log("Error", JSON.stringify(error));
        bleManager.stopDeviceScan();
        return;
      }
      console.log("Scanning for Devices");
      if (device.name === "GOAT Sensor") {
        if (device.isConnected) {
          device.cancelConnection();
          console.log("Device Disconnected");
        }
        bleManager.stopDeviceScan();
        console.log("Device Found", device.name, device.id);
        connectToDevice(device);
      }
    });
  }
  const isDuplicteDevice = (devices, nextDevice) =>
    devices.findIndex((device) => nextDevice.id === device.id) > -1;

  const connectToDevice = async (device) => {
    await device
      .connect()
      .then((device) => {
        device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {
        setConnectedDevice(device);
        console.log("Connected to Device", device.id);
        startStreamingData(device);
      })
      .catch((error) => {
        console.log("Error", JSON.stringify(error));
      });
  };
  function onDataUpdate(error, characteristic) {
    if (error) {
      console.log("Error", JSON.stringify(error));
      return;
    }
    if (!characteristic.value) return;
    const rawData = base64.decode(characteristic.value);
    console.log("Data Received", rawData);
    oldData = dataArray;
    oldData[characteristic.id] = rawData;
  }

  const startStreamingData = async (device) => {
    console.log(device.id);
    if (device) {
      for (let index = 0; index < characteristicUUIDs.length; index++) {
        device.monitorCharacteristicForService(
          serviceUUID,
          characteristicUUIDs[index],
          onDataUpdate
        );
        console.log("Monitoring Characteristic " + characteristicUUIDs[index]);
      }
    } else {
      console.log("No Device Connected");
    }
  };
  function startBLE() {
    if (requestBluetoothPermission()) {
      console.log("Permission Granted");
      scanForPeripherals();
    }
  }
  return (
    <TouchableOpacity onPress={startBLE}>
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          height: "100%",
        }}
      >
        Start Streaming Data
      </Text>
    </TouchableOpacity>
  );
}
export { BLEconnector };
/*



function useBLE() {



 


  const disconnectFromDevice = () => {
    if (connectedDevice) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
      setHeartRate(0);
    }
  };




  return (
    <></>
  )
  }
export {useBLE);

*/
