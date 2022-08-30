type setDispMaxType = ReturnType<typeof setValueDispMax>
type setDispMinType = ReturnType<typeof setValueDispMin>
type setStatusSettingsType = ReturnType<typeof setSettingsActivated>
type setNumType = ReturnType<typeof setNum>
export type ACTypes = setDispMaxType | setDispMinType | setStatusSettingsType | setNumType
export type StateType = {
    valueOnDisplayMin: number;
    valueOnDisplayMax: number
    settingsActivated: boolean
    num: number
}

const initialState: StateType = {
    valueOnDisplayMin: 0,
    valueOnDisplayMax: 5,
    settingsActivated: false,
    num: 0
}

export const valuesReducer = (state: StateType = initialState, action: ACTypes): StateType => {
    switch (action.type) {
        case 'SET_VALUE_DISP_MIN':
            return {...state, valueOnDisplayMin: action.valueMin}
        case 'SET_VALUE_DISP_MAX':
            return {...state, valueOnDisplayMax: action.valueMax}
        case 'SET_STATUS_SETTINGS':
            return {...state, settingsActivated: action.value}
                case 'SET_NUM_VALUE':
            return {...state, num: action.value}
        default:
            return state
    }
}

export const setValueDispMin = (valueMin: number) => {
    return {
        type: 'SET_VALUE_DISP_MIN',
        valueMin,
    } as const
}

export const setValueDispMax = (valueMax: number) => {
    return {
        type: 'SET_VALUE_DISP_MAX',
        valueMax,
    } as const
}

export const setSettingsActivated = (value: boolean) => {
    return {
        type: 'SET_STATUS_SETTINGS',
        value
    } as const
}
export const setNum = (value: number) => {
    return {
        type: 'SET_NUM_VALUE',
        value
    } as const
}