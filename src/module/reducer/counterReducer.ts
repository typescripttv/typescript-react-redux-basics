import { COUNTER_ACTION } from "../action/CounterActionCreator";
import { RootActions } from "../action";

export type CounterState = {
  firstNumber: number;
};

const initialState: CounterState = {
  firstNumber: 0,
};

function counterReducer(
  state: CounterState = initialState,
  action: RootActions
) {
  switch (action.type) {
    case COUNTER_ACTION.INCREMENT:
      return {
        ...state,
        firstNumber: state.firstNumber + 1,
      };
    case COUNTER_ACTION.DECREMENT:
      return {
        ...state,
        firstNumber: state.firstNumber - action.payload,
      };
    default:
      return state;
  }
}

export { counterReducer };
