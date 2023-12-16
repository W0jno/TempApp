import { Box } from "@mui/material";
import SliderContainer from "./SliderContainer";
import SubmitButton from "./buttons/SubmitButton";
import StopButton from "./buttons/StopButton";
import { useState } from "react";
import useCountdown from "../customHooks/useCountdown";
import { DataType } from "../types";
import SecondsContainer from "./SecondsContainer";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";

function Content() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [data, setData] = useState<DataType>({
    eccentric: 0,
    pause: 0,
    concentric: 0,
    rest: 1,
    reps: 1,
  });
  const { secondsLeft, start } = useCountdown();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [iteration, setIteration] = useState<number>(0);
  const [upDownPause, setUpDownPause] = useState<string>("");
  const [icon, setIcon] = useState<any>();
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const performIteration = (iteration: number) => {
    if (iteration >= data.reps || iteration < 0) {
      setIsFinished(true);
      return;
    }
    setIteration(iteration + 1);
    console.log("Rep number: " + (iteration + 1));

    setText("Ecceentric");
    setUpDownPause("Down");
    setIcon(<KeyboardDoubleArrowDownIcon />);
    setColor("#119a97");
    console.log("Ecceentric");
    start(data.eccentric);
    setTotalSeconds(data.eccentric);

    setTimeoutId(
      setTimeout(() => {
        setText("Pause");
        setUpDownPause("Pause");
        setIcon(<RemoveIcon />);
        setColor("#f1554d");
        console.log("Pause");
        start(data.pause);
        setTotalSeconds(data.pause);
        setTimeoutId(
          setTimeout(() => {
            setText("Concentric");
            setUpDownPause("Up");
            setIcon(<KeyboardDoubleArrowUpIcon />);
            setColor("#71de95");
            console.log("Concentric");
            start(data.concentric);
            setTotalSeconds(data.concentric);
            setTimeoutId(
              setTimeout(() => {
                setText("REST");
                setUpDownPause("Rest");
                setIcon("");
                setColor("#284c71");
                console.log("REST");
                start(data.rest);
                setTotalSeconds(data.rest);

                setTimeout(() => {
                  performIteration(iteration + 1);
                }, data.rest * 1000);
              }, data.concentric * 1000)
            );
          }, data.pause * 1000)
        );
      }, data.eccentric * 1000)
    );
  };

  const startCounting = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsClicked(!isClicked);
    setIsFinished(false);
    performIteration(0);
  };

  const stopCounting = () => {
    setIsClicked(!isClicked);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return isClicked === false ? (
    <Box>
      <form onSubmit={(e) => startCounting(e)}>
        <SliderContainer setData={setData} isClicked={isClicked} />

        <SubmitButton
          variant="contained"
          type="submit"
          sx={{ width: "100%", height: "7vh" }}
        >
          Go
        </SubmitButton>
      </form>
    </Box>
  ) : (
    <Box>
      <SecondsContainer
        text={text}
        secondsLeft={secondsLeft}
        color={color}
        repsTotal={data.reps}
        rep={iteration}
        upDownPause={upDownPause}
        icon={icon}
        iteration={iteration}
        totalSeconds={totalSeconds}
        isFinished={isFinished}
      />

      <StopButton
        variant="contained"
        type="button"
        sx={{ width: "100%", height: "7vh" }}
        onClick={stopCounting}
      >
        Stop
      </StopButton>
    </Box>
  );
}

export default Content;
