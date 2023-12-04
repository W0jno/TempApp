import { Container } from "@mui/material";
import Content from "./components/Content";
import "./styles/app.css";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Content />{" "}
    </Container>
  );
}

export default App;
