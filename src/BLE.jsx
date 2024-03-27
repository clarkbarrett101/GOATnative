import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from "react-native-ble-plx";

import * as ExpoDevice from "expo-device";

import base64 from "react-native-base64";

const serviceUUID = "0f80893b-3276-4851-adf4-53395fc05ffe";
const characteristicUUIDs = ["0001","0002","0003","0004","0005","0006"];
function useBLE() {
    const bleManager = useMemo(() => new BleManager(), []);
    const [allDevices, setAllDevices] = useState<Device[]>([]);
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
    const [dataArray, setDataArray] = useState<number>(0);
  
    const requestAndroid31Permissions = async () => {
      const bluetoothScanPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        {
          title: "Location Permission",
          message: "Bluetooth Low Energy requires Location",
          buttonPositive: "OK",
        }
      );
      const bluetoothConnectPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        {
          title: "Location Permission",
          message: "Bluetooth Low Energy requires Location",
          buttonPositive: "OK",
        }
      );
      const fineLocationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "Bluetooth Low Energy requires Location",
          buttonPositive: "OK",
        }
      );
  
      return (
        bluetoothScanPermission === "granted" &&
        bluetoothConnectPermission === "granted" &&
        fineLocationPermission === "granted"
      );
    };
  
    const requestPermissions = async () => {
      if (Platform.OS === "android") {
        if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Permission",
              message: "Bluetooth Low Energy requires Location",
              buttonPositive: "OK",
            }
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const isAndroid31PermissionsGranted =
            await requestAndroid31Permissions();
  
          return isAndroid31PermissionsGranted;
        }
      } else {
        return true;
      }
    };
  
    const isDuplicteDevice = (devices, nextDevice) =>
      devices.findIndex((device) => nextDevice.id === device.id) > -1;
  
    const scanForPeripherals = () =>
      bleManager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.log(error);
        }
        if (device && device.name?.includes("CorSense")) {
          setAllDevices((prevState) => {
            if (!isDuplicteDevice(prevState, device)) {
              return [...prevState, device];
            }
            return prevState;
          });
        }
      });
  
    const connectToDevice = async (device) => {
      try {
        const deviceConnection = await bleManager.connectToDevice(device.id);
        setConnectedDevice(deviceConnection);
        await deviceConnection.discoverAllServicesAndCharacteristics();
        bleManager.stopDeviceScan();
        startStreamingData(deviceConnection);
      } catch (e) {
        console.log("FAILED TO CONNECT", e);
      }
    };
  
    const disconnectFromDevice = () => {
      if (connectedDevice) {
        bleManager.cancelDeviceConnection(connectedDevice.id);
        setConnectedDevice(null);
        setHeartRate(0);
      }
    };
  
    function onDataUpdate(index,characteristic){
      const rawData = base64.decode(characteristic.value);
      oldData = dataArray;
      oldData[index] = rawData;
    };
  
    const startStreamingData = async (device) => {
      if (device) {
        for (let index = 0; index < characteristicUUIDs.length; index++) {
          device.monitorCharacteristicForService(
            serviceUUID,
            characteristicUUID,
            onDataUpdate(index,characteristic)
          );
        }
     
      } else {
        console.log("No Device Connected");
      }
    };
  
    return {
      scanForPeripherals,
      requestPermissions,
      connectToDevice,
      allDevices,
      connectedDevice,
      disconnectFromDevice,
      heartRate,
    };
  }
  
  export default useBLE;