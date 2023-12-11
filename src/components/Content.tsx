import { Box } from "@mui/material";
import SliderContainer from "./SliderContainer";
import SubmitButton from "./buttons/SubmitButton";
import StopButton from "./buttons/StopButton";
import { useState } from "react";
import useCountdown from "../customHooks/useCountdown";
import { DataType } from "../types";
import SecondsContainer from "./SecondsContainer";

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
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [text, setText] = useState<string | null>(null);

  const performIteration = (iteration: number) => {
    if (iteration >= data.reps || iteration < 0) {
      return;
    }

    console.log("Rep number: " + (iteration + 1));
    setText("Ecceentric");
    console.log("Ecceentric");
    start(data.eccentric);

    setTimeoutId(
      setTimeout(() => {
        setText("Pause");
        console.log("Pause");
        start(data.pause);
        setTimeoutId(
          setTimeout(() => {
            setText("Concentric");
            console.log("Concentric");
            start(data.concentric);
            setTimeoutId(
              setTimeout(() => {
                setText("REST");
                console.log("REST");
                start(data.rest);
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
      <SecondsContainer text={text} secondsLeft={secondsLeft} />

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
