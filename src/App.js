import Home from "./pages/Home";
import { CssBaseline, GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { bgcolor: "#F4F5F7" } }} />
      <Home />
    </>
  );
}

export default App;
