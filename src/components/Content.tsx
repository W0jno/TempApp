import { Box, Button } from "@mui/material";
import SliderContainer from "./SliderContainer";
import SubmitButton from "./buttons/SubmitButton";
import StopButton from "./buttons/StopButton";
import { useState } from "react";

function Content() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [data, setData] = useState<object>({});

  const startCounting = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsClicked(true);
    console.log(data);
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
      <StopButton
        variant="contained"
        type="button"
        sx={{ width: "100%", height: "7vh" }}
        onClick={() => setIsClicked(false)}
      >
        Stop
      </StopButton>
    </Box>
  );
}

export default Content;
