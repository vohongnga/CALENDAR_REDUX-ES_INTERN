import {rootReducers} from './reducers/index';
import { createStore } from "redux";

// const rootReducers = combineReducers({
//     month: monthReducer,
//     work: workReducer
// })
export const store = createStore(rootReducers);