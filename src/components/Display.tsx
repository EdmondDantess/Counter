import React, {FC} from "react";
import {Settings} from "./Settings";

type DisplayPropsType = {
    num: number;
    settingsActivated: boolean;
    valueDispMax: number;
    valueDispMin: number;
    changeValuesInputMax: (value: string) => void;
    changeValuesInputMin: (value: string) => void;
};

export const Display: FC<DisplayPropsType> = ({
                                                  num,
                                                  valueDispMax,
                                                  valueDispMin,
                                                  changeValuesInputMax,
                                                  changeValuesInputMin,
                                                  settingsActivated
                                              }) => {

    let classCounterNum = num === valueDispMax ? "breakNumDisp" : "";

    return (
        <div className="bakcgroundNum">
            {settingsActivated && (
                <span className={classCounterNum}>{num}</span>
            )}
            <Settings
                settingsActivated={settingsActivated}
                valueDispMax={valueDispMax}
                valueDispMin={valueDispMin}
                changeValuesInputMax={changeValuesInputMax}
                changeValuesInputMin={changeValuesInputMin}
            />
        </div>
    );
};
