import React, {FC} from "react";
import {Settings} from "./Settings";

type DisplayPropsType = {
    num: number;
    settingsActivated: boolean;
    valueOnDisplayMax: number;
    valueOnDisplayMin: number;
    changeValuesInputMax: (value: string) => void;
    changeValuesInputMin: (value: string) => void;
};

export const Display: FC<DisplayPropsType> = ({
                                                  num,
                                                  valueOnDisplayMax,
                                                  valueOnDisplayMin,
                                                  changeValuesInputMax,
                                                  changeValuesInputMin,
                                                  settingsActivated
                                              }) => {

    let classCounterNum = num === valueOnDisplayMax ? "breakNumDisp" : "";

    return (
        <div className="bakcgroundNum">
            {!settingsActivated && (
                <span className={classCounterNum}>{num}</span>
            )}
            <Settings
                settingsActivated={settingsActivated}
                valueOnDisplayMax={valueOnDisplayMax}
                valueOnDisplayMin={valueOnDisplayMin}
                changeValuesInputMax={changeValuesInputMax}
                changeValuesInputMin={changeValuesInputMin}
            />
        </div>
    );
};
