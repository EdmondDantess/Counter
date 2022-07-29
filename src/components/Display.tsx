import React from "react";
import { Settings } from "./Settings";

type DisplayPropsType = {
  num: number;
  settingsActivated: boolean;
  valueDispMax: number;
  valueDispMin: number;
  changeValuesInputMax: (value: string) => void;
  changeValuesInputMin: (value: string) => void;
};

export const Display = (props: DisplayPropsType) => {
  let classCounterNum = props.num === props.valueDispMax ? "breakNumDisp" : "";

  return (
    <div className="bakcgroundNum">
      {props.settingsActivated && (
        <span className={classCounterNum}>{props.num}</span>
      )}
      <Settings
        settingsActivated={props.settingsActivated}
        valueDispMax={props.valueDispMax}
        valueDispMin={props.valueDispMin}
        changeValuesInputMax={props.changeValuesInputMax}
        changeValuesInputMin={props.changeValuesInputMin}
      />
    </div>
  );
};
