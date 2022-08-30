import { valuesReducer} from './valuesReducer';
import {combineReducers, legacy_createStore as createStore} from 'redux';

const rootReducer = combineReducers({
    valuesOnDisplay: valuesReducer,
   })

export const store =createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store