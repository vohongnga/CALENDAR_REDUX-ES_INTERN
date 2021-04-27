import {monthReducer} from './month';
import {workReducer} from './work';
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
    month: monthReducer,
    work: workReducer
});