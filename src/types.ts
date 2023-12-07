type time = number;

export interface SliderComponentTypes {
    name: string,
    icon: any,
    setData:  React.Dispatch<React.SetStateAction<object>>
    isClicked: boolean;
    setTimeHook: React.Dispatch<React.SetStateAction<number | number[]>>;
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