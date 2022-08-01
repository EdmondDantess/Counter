import React, {FC} from "react";

type ButtonPropsType = {
  callBack: () => void;
  valueDisabled: boolean;
  name: string;
};

export const Button: FC<ButtonPropsType> = ({name,callBack,valueDisabled}) => {
  return (
    <button onClick={callBack} disabled={valueDisabled}>
      {name}
    </button>
  );
};
