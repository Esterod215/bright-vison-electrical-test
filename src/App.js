import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { CssBaseline, GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            background: "linear-gradient(180deg, #F9F9F9 0%, #ECECEC 100%)",
          },
        }}
      />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
