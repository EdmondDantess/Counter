import React from 'react';
import './App.css';
import {Display} from './components/Display';
import {Button} from './components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {setNum, setSettingsActivated, setValueDispMax, setValueDispMin} from './redux/valuesReducer';

function App() {

    let valueOnDisplayMin = useSelector<AppRootStateType, number>(state => state.valuesOnDisplay.valueOnDisplayMin)
    let valueOnDisplayMax = useSelector<AppRootStateType, number>(state => state.valuesOnDisplay.valueOnDisplayMax)
    let settingsActivated = useSelector<AppRootStateType, boolean>(state => state.valuesOnDisplay.settingsActivated)
    let num = useSelector<AppRootStateType, number>(state => state.valuesOnDisplay.num)

    const dispatch = useDispatch()

    const incrementPlusOne = () => {
        if (num < valueOnDisplayMax) {
            dispatch(setNum(num + 1));
        }
    };
    const resetNum = () => {
        dispatch(setNum(valueOnDisplayMin));
    };
    const pressSettings = () => {
        dispatch(setSettingsActivated(!settingsActivated));
    };
    const changeValuesInputMax = (valueMax: string) => {
        dispatch(setValueDispMax(+valueMax));
        if (+valueMax < 0) dispatch(setValueDispMax(0));
    };
    const changeValuesInputMin = (valueMin: string) => {
        dispatch(setValueDispMin(+valueMin));
        dispatch(setNum(+valueMin));
        if (+valueMin <= 0) {
            dispatch(setValueDispMin(0))
            dispatch(setNum(0))
        }
    };

    let disabledButtonInc = num === valueOnDisplayMax;
    let disabledButtonReset = num === valueOnDisplayMin;
    let disabledButtonSettings = valueOnDisplayMax <= valueOnDisplayMin;

    return (
        <div className="App">
            <Display
                num={num}
                settingsActivated={settingsActivated}
                valueOnDisplayMax={valueOnDisplayMax}
                valueOnDisplayMin={valueOnDisplayMin}
                changeValuesInputMax={changeValuesInputMax}
                changeValuesInputMin={changeValuesInputMin}
            />
            <div className="ButtonsBlock">
                <Button
                    callBack={incrementPlusOne}
                    valueDisabled={disabledButtonInc || settingsActivated}
                    name="Inc"
                />
                <Button
                    callBack={resetNum}
                    valueDisabled={disabledButtonReset || settingsActivated}
                    name="Reset"
                />
                <div className="ButtonSettings">
                    <Button
                        callBack={pressSettings}
                        valueDisabled={disabledButtonSettings}
                        name={!settingsActivated ? 'Settings' : 'Set Values'}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
