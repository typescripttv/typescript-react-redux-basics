import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  decrementCounter,
  incrementCounter,
} from "./module/action/CounterActionCreator";

interface Props {}

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

const CounterControls = ({ increment, decrement }: Props & DispatchProps) => {
  return (
    <>
      <p>
        <button onClick={increment}>Plus 1</button>
      </p>
      <p>
        <button onClick={() => decrement()}>Minus 1</button>
      </p>
      <p>
        <button onClick={() => decrement(2)}>Minus 2</button>
      </p>
    </>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      decrement: decrementCounter,
      increment: incrementCounter,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(CounterControls);
