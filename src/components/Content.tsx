import { Box, Button } from "@mui/material";
import SliderContainer from "./SliderContainer";
import { styled } from "@mui/material/styles";
function Content(): JSX.Element {
  const SubmitButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 32,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#71de95",
    borderColor: "#71de95",

    "&:hover": {
      backgroundColor: "#71de95",
      borderColor: "#71de95",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#71de95",
      borderColor: "#71de95",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(113, 222, 149,.5)",
    },
  });

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("SliderContainer");
        }}
      >
        <SliderContainer />

        <SubmitButton
          variant="contained"
          type="submit"
          sx={{ width: "100%", height: "7vh" }}
        >
          Go
        </SubmitButton>
      </form>
    </Box>
  );
}

export default Content;
