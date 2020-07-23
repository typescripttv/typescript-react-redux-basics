import { counterReducer, CounterState } from "./counterReducer";

export type RootState = {
  counterState: CounterState;
};

const reducers = {
  counterState: counterReducer,
};

export { reducers };
