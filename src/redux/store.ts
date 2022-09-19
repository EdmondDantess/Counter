import {valuesReducer} from './valuesReducer';
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {loadState, saveState} from './localstorage-utils';

const rootReducer = combineReducers({
    valuesOnDisplay: valuesReducer,
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        valuesOnDisplay: store.getState().valuesOnDisplay
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store