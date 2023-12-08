export type NumberType = number | number[]

export interface SliderComponentTypes {
    name: string,
    icon: any,
    setData:  React.Dispatch<React.SetStateAction<object>>
    isClicked: boolean;
    setTimeHook: React.Dispatch<React.SetStateAction<NumberType>>;
}
export interface Colors {
    concentricColor: string,
    pauseColor: string,
    eccentricColor: string
    
}

export interface SliderContainerTypes {
    setData:  React.Dispatch<React.SetStateAction<object>>
    isClicked: boolean;
}

export interface RepsTypes {
    setRest: React.Dispatch<React.SetStateAction<NumberType>>;
    setReps: React.Dispatch<React.SetStateAction<NumberType>>
}