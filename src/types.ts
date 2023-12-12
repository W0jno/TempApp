export type NumberType = number
export interface DataType {
    eccentric: NumberType,
    pause: NumberType,
    concentric: NumberType,
    rest: NumberType,
     reps: NumberType
}

export interface SliderComponentTypes {
    name: string,
    icon: any,
    setData?:  React.Dispatch<React.SetStateAction<DataType>>
    isClicked: boolean;
    setTimeHook: React.Dispatch<React.SetStateAction<NumberType>>;
}
export interface Colors {
    concentricColor: string,
    pauseColor: string,
    eccentricColor: string
    
}

export interface SliderContainerTypes {
    setData:  React.Dispatch<React.SetStateAction<DataType>>
    isClicked: boolean;
}

export interface RepsTypes {
    setRest: React.Dispatch<React.SetStateAction<NumberType>>;
    setReps: React.Dispatch<React.SetStateAction<NumberType>>
}

export interface SecondsContainerTypes {
    text: string | null,
    secondsLeft: NumberType,
    color: string | null,
    repsTotal: NumberType,
    rep: NumberType,
    icon: any,
    upDownPause: string,
    totalSeconds: number,
    iteration: number,
    isFinished: boolean
}
