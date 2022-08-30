import React, {ChangeEvent, FC} from "react";

type SettingsPropsType = {
    settingsActivated: boolean;
    valueOnDisplayMax: number;
    valueOnDisplayMin: number;
    changeValuesInputMax: (value: string) => void;
    changeValuesInputMin: (value: string) => void;
};

export const Settings: FC<SettingsPropsType> = ({
                                                    settingsActivated,
                                                    valueOnDisplayMin,
                                                    valueOnDisplayMax,
                                                    changeValuesInputMin,
                                                    changeValuesInputMax
                                                }) => {
    const onChangeInputHandlerMax = (e: ChangeEvent<HTMLInputElement>): void => {
        changeValuesInputMax(e.currentTarget.value);
    };
    const onChangeInputHandlerMin = (e: ChangeEvent<HTMLInputElement>): void => {
        changeValuesInputMin(e.currentTarget.value);
    };

    let classCounterNumInputError =
        valueOnDisplayMax <= valueOnDisplayMin ? "ErrorInputValue" : "";

    return (
        <>
            {settingsActivated && (
                <>
                    <label className={classCounterNumInputError}>
                        max value:
                        <input
                            type="number"
                            onChange={onChangeInputHandlerMax}
                            value={valueOnDisplayMax}
                        />
                    </label>
                    <label className={classCounterNumInputError}>
                        start value:
                        <input
                            type="number"
                            onChange={onChangeInputHandlerMin}
                            value={valueOnDisplayMin}
                        />
                    </label>
                </>
            )}
        </>
    );
};
