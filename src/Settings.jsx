import { Meter } from "./index";

function Settings(props) {
  return (
    <>
      <Meter setSetting={props.setTolerance} setting={props.tolerance} />
      <Meter
        setSetting={props.setLoopThreshold}
        setting={props.loopThreshold}
      />
      <Meter setSetting={props.setGracePeriod} setting={props.gracePeriod} />
    </>
  );
}
export { Settings };
