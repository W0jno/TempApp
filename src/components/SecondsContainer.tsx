import { SecondsContainerTypes } from "../types";
import { Container, Box } from "@mui/material";

function SecondsContainer(props: SecondsContainerTypes) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "65vh",
        width: "80vw",
        marginBottom: "4vh",
        border: "solid",
        borderRadius: "10px",
      }}
    >
      <Box>{props.text}</Box>
      <Box>{props.secondsLeft > 0 && `${props.secondsLeft}`}</Box>
    </Container>
  );
}

export default SecondsContainer;
