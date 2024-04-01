import { useEffect, useMemo, useState } from "react";
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
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
function BLEconnector() {
  const serviceUUID = "0f80893b-3276-4851-adf4-53395fc05ffe";
  const characteristicUUIDs = ["0001", "0002", "0003", "0004", "0005", "0006"];
  const bleManager = new BleManager();
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [scannedDevice, setScannedDevice] = useState(null);
  const [dataArray, setDataArray] = useState(0);
  const [output, setOutput] = useState("Connect to Device");

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
        setOutput("Permission Granted");
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
        setOutput("1Error" + JSON.stringify(error));
        bleManager.stopDeviceScan();
        return;
      }
      setOutput("Scanning for Devices");
      if (device.name === "GOAT Sensor") {
        setOutput("Device Found");
        setScannedDevice(device);
        bleManager.stopDeviceScan();
      }
    });
  }

  const connectToDevice = async () => {
    if (scannedDevice === null) {
      return;
    }
    if (
      connectedDevice &&
      connectedDevice.isConnected() &&
      connectedDevice.id === device.id
    ) {
      setOutput("Device already connected");
    } else {
      const dv = await scannedDevice.connect();
      setConnectedDevice(dv);
      scannedDevice.onDisconnected((error, device) => {
        setOutput("Device Disconnected");
        setConnectedDevice(null);
      });
    }
    if (connectedDevice === null) {
      setOutput("Device not connected");
      return;
    }
    startStreamingData();
  };

  function onDataUpdate(error, characteristic) {
    if (error) {
      setOutput("6Error" + JSON.stringify(error));
      return;
    }
    if (!characteristic.value) {
      setOutput("7No Data Received");
      return;
    }
    const rawData = base64.decode(characteristic.value);
    setOutput("Data Received" + rawData);
    oldData = dataArray;
    oldData[characteristic.id] = rawData;
  }

  const startStreamingData = async () => {
    await connectedDevice.discoverAllServicesAndCharacteristics();
    setOutput("Starting Data Stream");
    if (connectedDevice && connectedDevice.isConnected()) {
      for (let index = 0; index < characteristicUUIDs.length; index++) {
        connectedDevice.monitorCharacteristicForService(
          serviceUUID,
          characteristicUUIDs[index],
          onDataUpdate
        );
        setOutput("Monitoring Characteristic " + characteristicUUIDs[index]);
      }
    } else {
      setOutput("Device Disconnected");
    }
  };
  function startBLE() {
    if (requestBluetoothPermission()) {
      setOutput("Permission Granted");
      scanForPeripherals();
    }
  }
  function deviceStatus() {
    if (connectedDevice && connectedDevice.isConnected()) {
      return connectedDevice.name + "Connected";
    } else {
      return "No Device Connected";
    }
  }
  useEffect(() => {
    deviceStatus();
  }, [connectedDevice]);
  function getService() {
    if (connectedDevice && connectedDevice.isConnected()) {
      if (connectedDevice.services() == null) {
        return "1No Services Found";
      } else {
        connectedDevice
          .services()
          .then((services) => {
            return JSON.stringify(services);
          })
          .catch((error) => {
            return "2Error" + JSON.stringify(error);
          });
      }
    } else {
      return "3No Device Connected";
    }
  }
  useEffect(() => {
    getService();
  }, [connectedDevice]);
  function getScannedDevice() {
    if (scannedDevice) {
      return scannedDevice.name;
    } else {
      return "No Device Found";
    }
  }
  useEffect(() => {
    getScannedDevice();
  }, [scannedDevice]);
  return (
    <>
      <TouchableOpacity onPress={startBLE}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            height: "33%",
          }}
        >
          {output}
          scan
          {getScannedDevice()}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={connectToDevice}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            height: "33%",
          }}
        >
          connect
          {deviceStatus()}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={startStreamingData}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            height: "33%",
          }}
        >
          stream
          {getService()}
        </Text>
      </TouchableOpacity>
    </>
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
