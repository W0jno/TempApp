import { Box, Container, Slider } from "@mui/material";
import { SliderComponentType } from "../types";
import { useState } from "react";
import { styled } from "@mui/material/styles";
function SliderComponent(props: SliderComponentType): JSX.Element {
  const [time, setTime] = useState<number | number[]>(5);

  const TempoSlider = styled(Slider)({
    color: `${props.color}`,
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
      color: `${props.color}`,
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: `${props.color}`,
    },
  });

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {props.icon}
          {props.name}
        </Box>
        {time}
      </Box>
      <TempoSlider
        step={1}
        min={1}
        max={10}
        value={time}
        onChange={(_e, value) => setTime(value)}
      />
    </Container>
  );
}

export default SliderComponent;
