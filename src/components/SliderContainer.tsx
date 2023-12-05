import SliderComponent from "./SliderComponent";
import { Container, Box } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";
import RepsContainer from "./RepsContainer";

function SliderContainer(): JSX.Element {
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
          name={"Concentric"}
          icon={<KeyboardDoubleArrowUpIcon />}
        />
        <SliderComponent name={"Pause"} icon={<RemoveIcon />} />
        <SliderComponent
          name={"Eccentric"}
          icon={<KeyboardDoubleArrowDownIcon />}
        />
      </Box>

      <RepsContainer />
    </Container>
  );
}

export default SliderContainer;
