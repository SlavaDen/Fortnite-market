import { Box, Toolbar, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import MarketPage from "./pages/MarketPage";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ p: 6 }}>
        <Toolbar />
        <MarketPage />
      </Box>
    </Box>
  );
}

export default App;
