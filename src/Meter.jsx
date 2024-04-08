// Meter.js

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Meter = ({ label, value, setValue }) => {
  const incrementValue = () => {
    setValue(value + 0.1);
  };

  const decrementValue = () => {
    setValue(value - 0.1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.button} onPress={decrementValue}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementValue}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  value: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export { Meter };
