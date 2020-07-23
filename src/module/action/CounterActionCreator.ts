export enum COUNTER_ACTION {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

const incrementCounter = () => ({ type: COUNTER_ACTION.INCREMENT });
const decrementCounter = (value: number = 1) => ({
  type: COUNTER_ACTION.DECREMENT,
  payload: value,
});

export type CounterActions =
  | (ReturnType<typeof incrementCounter> & { type: COUNTER_ACTION.INCREMENT })
  | (ReturnType<typeof decrementCounter> & { type: COUNTER_ACTION.DECREMENT });

export { incrementCounter, decrementCounter };
