import React, { ChangeEvent } from "react";

type SettingsPropsType = {
  settingsActivated: boolean;
  valueDispMax: number;
  valueDispMin: number;
  changeValuesInputMax: (value: string) => void;
  changeValuesInputMin: (value: string) => void;
};

export const Settings = (props: SettingsPropsType) => {
  const onChangeInputHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeValuesInputMax(e.currentTarget.value);
  };
  const onChangeInputHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeValuesInputMin(e.currentTarget.value);
  };

  let classCounterNumInputError =
    props.valueDispMax <= props.valueDispMin ? "ErrorInputValue" : "";

  return (
    <>
      {!props.settingsActivated && (
        <>
          <label className={classCounterNumInputError}>
            max value:
            <input
              type="number"
              onChange={onChangeInputHandlerMax}
              value={props.valueDispMax}
            />
          </label>
          <label className={classCounterNumInputError}>
            start value:
            <input
              type="number"
              onChange={onChangeInputHandlerMin}
              value={props.valueDispMin}
            />
          </label>
        </>
      )}
    </>
  );
};
