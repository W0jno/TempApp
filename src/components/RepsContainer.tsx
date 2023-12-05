import { Box, Slider, IconButton, Button } from "@mui/material";
import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function RepsContainer() {
  const [time, setTime] = useState<number | number[]>(0);
  const [reps, setReps] = useState<number>(1);

  return (
    <Box
      sx={{
        height: "20vh",
        border: "solid 2px #797a7a",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
        padding: "10px",
      }}
    >
      <Box sx={{ width: "90%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ marginRight: "5px" }} />
            Rest between reps
          </Box>
          {time}
        </Box>
        <Slider
          min={1}
          max={10}
          value={time}
          sx={{ height: "0.5rem" }}
          onChange={(_, value) => setTime(value)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton aria-label="" onClick={() => setReps(reps + 1)}>
          <AddCircleIcon
            sx={{ color: "white", height: "30px", width: "40px" }}
          />
        </IconButton>
        {reps}
        <IconButton
          aria-label=""
          onClick={() => {
            reps == 1 ? "" : setReps(reps - 1);
          }}
        >
          <RemoveCircleIcon
            sx={{ color: "white", height: "30px", width: "40px" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default RepsContainer;
