import Reel from "./Reel";
import { useEffect, useState } from "react";
import { RecordButton } from "./RecordButton";
import { CompareButton } from "./CompareButton";
import { Score } from "./Score";

function Driver() {
  let modes = ["noRecording", "idle", "recording", "comparing"];
  const [appMode, setAppMode] = useState(modes[0]);
  const [score, setScore] = useState(100);
  const [currentFrame, setCurrentFrame] = useState(0);
  const fps = 10;
  function update() {
    if (appMode === "recording" || appMode === "comparing") {
      setCurrentFrame(currentFrame + 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(update, 1000 / fps);
    return () => clearInterval(interval);
  }, [currentFrame, appMode]);

  return (
    <>
      <Score score={score} />
      <RecordButton
        style={{ zIndex: 3 }}
        appMode={appMode}
        setAppMode={setAppMode}
      />
      <CompareButton appMode={appMode} setAppMode={setAppMode} />
      <Reel
        currentFrame={currentFrame}
        setCurrentFrame={setCurrentFrame}
        appMode={appMode}
        setAppMode={setAppMode}
        score={score}
        setScore={setScore}
      />
    </>
  );
}

export { Driver };
