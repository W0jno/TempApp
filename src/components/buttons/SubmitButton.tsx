import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
const submitButtonColor = "#71de95";
const SubmitButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 32,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: submitButtonColor,
  borderColor: submitButtonColor,

  "&:hover": {
    backgroundColor: submitButtonColor,
    borderColor: submitButtonColor,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: submitButtonColor,
    borderColor: submitButtonColor,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(113, 222, 149,.5)",
  },
});

export default SubmitButton;
