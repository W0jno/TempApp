import SliderComponent from "./SliderComponent";
import { Container, Box } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";
import RepsContainer from "./RepsContainer";
import { SliderContainerTypes, NumberType } from "../types";
import { useState, useEffect } from "react";

function SliderContainer(props: SliderContainerTypes): JSX.Element {
  const [time1, setTime1] = useState<NumberType>(0);
  const [time2, setTime2] = useState<NumberType>(0);
  const [time3, setTime3] = useState<NumberType>(0);
  const [rest, setRest] = useState<NumberType>(0);
  const [reps, setReps] = useState<NumberType>(1);

  useEffect(() => {
    props.setData({
      eccentric: time1,
      pause: time2,
      concentric: time3,
      rest: rest,
      reps: reps,
    });
  }, [time1, time2, time3, rest, reps]);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "65vh",
        width: "80vw",
        fontSize: "1.5rem",
        border: "solid 2px #404242",
        borderRadius: "10px",
        backgroundColor: "#303333",
        marginBottom: "4vh",
      }}
    >
      <h1>TempApp</h1>
      <Box>
        <SliderComponent
          name={"Eccentric"}
          icon={<KeyboardDoubleArrowUpIcon />}
          setData={props.setData}
          isClicked={props.isClicked}
          setTimeHook={setTime1}
        />
        <SliderComponent
          name={"Pause"}
          icon={<RemoveIcon />}
          setData={props.setData}
          isClicked={props.isClicked}
          setTimeHook={setTime2}
        />
        <SliderComponent
          name={"Concentric"}
          icon={<KeyboardDoubleArrowDownIcon />}
          setData={props.setData}
          isClicked={props.isClicked}
          setTimeHook={setTime3}
        />
      </Box>

      <RepsContainer setRest={setRest} setReps={setReps} />
    </Container>
  );
}

export default SliderContainer;
