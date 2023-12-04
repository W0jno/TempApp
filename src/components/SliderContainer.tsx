import SliderComponent from "./SliderComponent";
import { Container } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";

function SliderContainer(): JSX.Element {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        width: "90vw",
        fontSize: "1.5rem",
      }}
    >
      <SliderComponent
        name={"Concentric"}
        color={"#71de95"}
        icon={<KeyboardDoubleArrowUpIcon />}
      />
      <SliderComponent name={"Pause"} color={"	#f1554d"} icon={<RemoveIcon />} />
      <SliderComponent
        name={"Eccentric"}
        color={"#119a97"}
        icon={<KeyboardDoubleArrowDownIcon />}
      />
    </Container>
  );
}

export default SliderContainer;
