import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
const stopButtonColor = "#f1554d";
const StopButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 32,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: stopButtonColor,
  borderColor: stopButtonColor,

  "&:hover": {
    backgroundColor: stopButtonColor,
    borderColor: stopButtonColor,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: stopButtonColor,
    borderColor: stopButtonColor,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(113, 222, 149,.5)",
  },
});

export default StopButton;
