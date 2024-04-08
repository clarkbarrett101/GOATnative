import { Meter } from "./index";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

function Settings(props) {
  return (
    <View style={styles.container}>
      <Meter
        setValue={props.setTolerance}
        value={props.tolerance}
        label={"Grade Tolerance"}
      />
      <Meter
        setValue={props.setLoopThreshold}
        value={props.loopThreshold}
        label={"Loop Threshold"}
      />
      <Meter
        setValue={props.setGracePeriod}
        value={props.gracePeriod}
        label={"Minimum Time"}
      />
      <TouchableOpacity onPress={() => props.setCurrentPage(props.styleType)}>
        <Image source={require("../assets/back_icon.png")} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
export { Settings };
