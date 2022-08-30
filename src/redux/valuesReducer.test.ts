import {setSettingsActivated, setValueDispMax, setValueDispMin, StateType, valuesReducer} from './valuesReducer';


test('test increment of value Min', () => {
    const startValues: StateType = {
        valueOnDisplayMin: 1,
        valueOnDisplayMax: 5,
        settingsActivated: false,
        num: 0
    }
    const endValues = valuesReducer(startValues, setValueDispMin(4))
    expect(endValues.valueOnDisplayMin).toBe(4)
    expect(endValues.valueOnDisplayMax).toBe(5)
})
test('test increment of value Max', () => {
    const startValues: StateType = {
        valueOnDisplayMin: 1,
        valueOnDisplayMax: 5,
        settingsActivated: false,
        num: 0
    }
    const endValues = valuesReducer(startValues, setValueDispMax(33))
    expect(endValues.valueOnDisplayMax).toBe(33)
    expect(endValues.valueOnDisplayMin).toBe(1)
})
test('test reducer of value settingsActivated', () => {
    const startValues: StateType = {
        valueOnDisplayMin: 1,
        valueOnDisplayMax: 5,
        settingsActivated: false,
        num: 0
    }
    const endValues = valuesReducer(startValues, setSettingsActivated(true))
    expect(endValues.settingsActivated).toBe(true)
    expect(endValues.valueOnDisplayMin).toBe(1)
})