import React from "react";
import { connect } from "react-redux";
import { RootState } from "./module/reducer";

interface Props {}

type ConnectedProps = ReturnType<typeof mapStateToProps>;

const CounterDisplay = ({ myNumber }: Props & ConnectedProps) => {
  return <>{myNumber}</>;
};

function mapStateToProps(state: RootState) {
  return {
    myNumber: state.counterState.firstNumber,
  };
}

export default connect(mapStateToProps)(CounterDisplay);
