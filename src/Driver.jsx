import { useEffect, useState } from "react";
import {
  Reel,
  Calibration,
  MainMenu,
  Tracker,
  Settings,
  FitCheckTracker,
  GoatTracker,
} from "./index";

function Driver() {
  const [frames, setFrames] = useState([]);
  const pages = [
    "mainMenu",
    "calibration",
    "tracker",
    "settings",
    "GOAT",
    "fitCheck",
  ];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const styleTypes = ["regular"];
  const [styleType, setStyleType] = useState(styleTypes[0]);
  let modes = ["idle", "recording", "comparing"];
  const [appMode, setAppMode] = useState(modes[0]);
  const [score, setScore] = useState(100);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [tolerance, setTolerance] = useState(0.5);
  const [loopThreshold, setLoopThreshold] = useState(0.3);
  const [gracePeriod, setGracePeriod] = useState(2);
  const [fps, setFps] = useState(20);
  const [round, setRound] = useState(1);
  const [rep, setRep] = useState(1);

  function update() {
    if (appMode === "recording" || appMode === "comparing") {
      setCurrentFrame(currentFrame + 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(update, 1000 / fps);
    return () => clearInterval(interval);
  }, [currentFrame, appMode]);

  function loadPage() {
    switch (currentPage) {
      case "mainMenu":
        return (
          <MainMenu
            setCurrentPage={setCurrentPage}
            setFrames={setFrames}
            setCurrentFrame={setCurrentFrame}
            setStyleType={setStyleType}
          />
        );
      case "calibration":
        return <Calibration setCurrentPage={setCurrentPage} />;
      case "fitCheck":
        return (
          <>
            <FitCheckTracker
              setCurrentFrame={setCurrentFrame}
              setFrames={setFrames}
              frames={frames}
              styleType={styleType}
              appMode={appMode}
              setAppMode={setAppMode}
              score={score}
              setScore={setScore}
              round={round}
              setRound={setRound}
              rep={rep}
              setRep={setRep}
              setCurrentPage={setCurrentPage}
            />
            <Reel
              setFrames={setFrames}
              frames={frames}
              currentFrame={currentFrame}
              setCurrentFrame={setCurrentFrame}
              appMode={appMode}
              setAppMode={setAppMode}
              score={score}
              setScore={setScore}
              tolerance={tolerance}
              loopThreshold={loopThreshold}
              gracePeriod={gracePeriod}
              fps={fps}
              round={round}
              rep={rep}
              setRep={setRep}
              setRound={setRound}
              styleType={styleType}
            />
          </>
        );
      case "tracker":
        return (
          <>
            <Tracker
              setCurrentFrame={setCurrentFrame}
              setFrames={setFrames}
              frames={frames}
              styleType={styleType}
              appMode={appMode}
              setAppMode={setAppMode}
              score={score}
              setScore={setScore}
              round={round}
              setRound={setRound}
              rep={rep}
              setRep={setRep}
              setCurrentPage={setCurrentPage}
            />
            <Reel
              setFrames={setFrames}
              styleType={styleType}
              frames={frames}
              currentFrame={currentFrame}
              setCurrentFrame={setCurrentFrame}
              appMode={appMode}
              setAppMode={setAppMode}
              score={score}
              setScore={setScore}
              tolerance={tolerance}
              loopThreshold={loopThreshold}
              gracePeriod={gracePeriod}
              fps={fps}
              round={round}
              rep={rep}
              setRep={setRep}
              setRound={setRound}
            />
          </>
        );

      case "settings":
        return (
          <Settings
            styleType={styleType}
            tolerance={tolerance}
            setTolerance={setTolerance}
            loopThreshold={loopThreshold}
            setLoopThreshold={setLoopThreshold}
            gracePeriod={gracePeriod}
            setGracePeriod={setGracePeriod}
            setCurrentPage={setCurrentPage}
          />
        );
      case "GOAT":
        return (
          <>
            <GoatTracker
              setCurrentFrame={setCurrentFrame}
              setFrames={setFrames}
              frames={frames}
              styleType={styleType}
              appMode={appMode}
              setAppMode={setAppMode}
              score={score}
              setScore={setScore}
              round={round}
              setRound={setRound}
              rep={rep}
              setRep={setRep}
              setCurrentPage={setCurrentPage}
            />
            <Reel
              setFrames={setFrames}
              frames={frames}
              currentFrame={currentFrame}
              setCurrentFrame={setCurrentFrame}
              appMode={appMode}
              setAppMode={setAppMode}
              score={score}
              setScore={setScore}
              tolerance={tolerance}
              loopThreshold={loopThreshold}
              gracePeriod={gracePeriod}
              fps={fps}
              round={round}
              rep={rep}
              setRep={setRep}
              setRound={setRound}
              styleType={styleType}
            />
          </>
        );

      default:
        return <MainMenu setCurrentPage={setCurrentPage} />;
    }
  }

  return <>{loadPage()}</>;
}

export { Driver };
