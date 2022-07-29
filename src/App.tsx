import React, {useEffect, useState} from "react";
import "./App.css";
import {Display} from "./components/Display";
import {Button} from "./components/Button";

function App() {

    let [valueDispMin, setValueDispMin] = useState<number>(0);
    let [valueDispMax, setValueDispMax] = useState<number>(5);
    let [num, setNum] = useState<number>(valueDispMin);
    let [settingsActivated, setSettingsActivated] = useState<boolean>(true);

    useEffect(() => {

        let newValueNum = localStorage.getItem("CountNum");
        let newValueDispMax = localStorage.getItem("maxValue");
        let newValueDispMin = localStorage.getItem("minValue");

        if (newValueDispMin) {
            valueDispMin = JSON.parse(newValueDispMin);
            setValueDispMin(valueDispMin);
        }
        if (newValueDispMax) {
            valueDispMax = JSON.parse(newValueDispMax);
            setValueDispMax(valueDispMax);
        }
        if (newValueNum) {
            num = JSON.parse(newValueNum);
            setNum(num);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("CountNum", JSON.stringify(num));
        localStorage.setItem("maxValue", JSON.stringify(valueDispMax));
        localStorage.setItem("minValue", JSON.stringify(valueDispMin));
    }, [num, valueDispMin, valueDispMax]);

    const incrementPlusOne = () => {
        if (num < valueDispMax) {
            setNum(num + 1);
        }
    };
    const resetNum = () => {
        setNum(valueDispMin);
    };
    const pressSettings = () => {
        setSettingsActivated(!settingsActivated);
    };
    const changeValuesInputMax = (value: string) => {
        setValueDispMax(+value);
        if (+value < 0) setValueDispMax(0);
    };
    const changeValuesInputMin = (value: string) => {
        setValueDispMin(+value);
        setNum(+value);
        if (+value <= 0) setValueDispMin(0);
         };

    let disabledButtonInc = num === valueDispMax ? true : false;
    let disabledButtonReset = num === valueDispMin ? true : false;
    let disabledButtonSettings = valueDispMax < valueDispMin ? true : false;

    return (
        <div className="App">
            <Display
                num={num}
                settingsActivated={settingsActivated}
                valueDispMax={valueDispMax}
                valueDispMin={valueDispMin}
                changeValuesInputMax={changeValuesInputMax}
                changeValuesInputMin={changeValuesInputMin}
            />
            <div className="ButtonsBlock">
                <Button
                    callBackF={incrementPlusOne}
                    valueDisabled={disabledButtonInc || !settingsActivated}
                    children="Inc"
                />
                <Button
                    callBackF={resetNum}
                    valueDisabled={disabledButtonReset || !settingsActivated}
                    children={"Reset"}
                />
                <div className="ButtonSettings">
                    <Button
                        callBackF={pressSettings}
                        valueDisabled={disabledButtonSettings}
                    >
                        {settingsActivated && "Settings"}
                        {!settingsActivated && "Set Values"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
