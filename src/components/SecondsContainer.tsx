import { SecondsContainerTypes } from "../types";
import { Container, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const countdownAnimation = keyframes`
 from {
    height: 100%;
  }
  to {
    height: 0;
  }
`;
function SecondsContainer(props: SecondsContainerTypes) {
  const progress =
    (props.totalSeconds - props.secondsLeft) / props.totalSeconds;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        {props.icon} {props.upDownPause}
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          width: "80vw",
          border: "solid",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            fontSize: "4rem",
            width: "100%",
            height: `100%`,
            backgroundColor: `${props.color}`,
            position: "absolute",
            borderRadius: "10px",
            bottom: 0,
            animation: `${countdownAnimation} ${props.totalSeconds}s linear`,
          }}
        ></Box>
        <Box sx={{ fontSize: "4rem", position: "fixed" }}>
          {props.secondsLeft > 0 && `${props.secondsLeft}`}
        </Box>
      </Container>
      <Box
        sx={{
          fontSize: "5vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {props.rep}/{props.repsTotal}
      </Box>
    </Box>
  );
}

export default SecondsContainer;
