import React from "react";

type ButtonPropsType = {
  callBackF: () => void;
  valueDisabled: boolean;
  children: any;
};

export const Button = (props: ButtonPropsType) => {
  return (
    <button onClick={props.callBackF} disabled={props.valueDisabled}>
      {props.children}
    </button>
  );
};
