import { Box, Slider, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { RepsTypes, NumberType } from "../types";

function RepsContainer(props: RepsTypes): JSX.Element {
  const [rest, setRest] = useState<NumberType>(1);
  const [reps, setReps] = useState<number>(1);

  useEffect(() => {
    props.setRest(rest);
    props.setReps(reps);
  }, [rest, reps]);

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ marginRight: "5px" }} />
            Rest between reps
          </Box>
          {rest}
        </Box>
        <Slider
          min={1}
          max={10}
          value={rest}
          sx={{ height: "0.5rem" }}
          onChange={(_, value) => setRest(value as number)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span>Reps</span>
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
    </Box>
  );
}

export default RepsContainer;
