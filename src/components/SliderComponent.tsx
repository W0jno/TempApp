import { Box, Container, Slider } from "@mui/material";
import { SliderComponentType } from "../types";
import { useState } from "react";

function SliderComponent(props: SliderComponentType): JSX.Element {
  const [time, setTime] = useState<number | number[]>(5);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {props.icon}
          {props.name}
        </Box>
        {time}
      </Box>

      <Slider
        min={1}
        max={10}
        value={time}
        sx={{ height: "0.5rem" }}
        onChange={(_, value) => setTime(value)}
        className={props.name}
      />
    </Container>
  );
}

export default SliderComponent;