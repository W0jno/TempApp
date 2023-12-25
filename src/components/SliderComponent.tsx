import { Box, Container, Slider } from "@mui/material";
import { SliderComponentTypes } from "../types";
import { useState, useEffect } from "react";

function SliderComponent(props: SliderComponentTypes): JSX.Element {
  const [time, setTime] = useState<any>(5);
  useEffect(() => {
    props.setTimeHook(time);
  }, [time]);
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
