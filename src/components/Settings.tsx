import React, {ChangeEvent, FC} from "react";

type SettingsPropsType = {
    settingsActivated: boolean;
    valueDispMax: number;
    valueDispMin: number;
    changeValuesInputMax: (value: string) => void;
    changeValuesInputMin: (value: string) => void;
};

export const Settings: FC<SettingsPropsType> = ({
                                                    settingsActivated,
                                                    valueDispMin,
                                                    valueDispMax,
                                                    changeValuesInputMin,
                                                    changeValuesInputMax
                                                }) => {
    const onChangeInputHandlerMax = (e: ChangeEvent<HTMLInputElement>): void => {
        changeValuesInputMax(e.currentTarget.value);
    };
    const onChangeInputHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        changeValuesInputMin(e.currentTarget.value);
    };

    let classCounterNumInputError =
        valueDispMax <= valueDispMin ? "ErrorInputValue" : "";

    return (
        <>
            {!settingsActivated && (
                <>
                    <label className={classCounterNumInputError}>
                        max value:
                        <input
                            type="number"
                            onChange={onChangeInputHandlerMax}
                            value={valueDispMax}
                        />
                    </label>
                    <label className={classCounterNumInputError}>
                        start value:
                        <input
                            type="number"
                            onChange={onChangeInputHandlerMin}
                            value={valueDispMin}
                        />
                    </label>
                </>
            )}
        </>
    );
};
