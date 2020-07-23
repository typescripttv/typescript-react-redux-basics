import { combineReducers, createStore } from "redux";
import { reducers, RootState } from "./module/reducer";

const store = createStore(combineReducers<RootState>(reducers));
export { store };
