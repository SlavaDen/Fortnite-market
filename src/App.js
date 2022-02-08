import { Box, Toolbar, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import MarketPage from "./pages/MarketPage";
import { MarketProvider } from "./marketContext";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ p: 6 }}>
        <Toolbar />
        <MarketProvider>
          <MarketPage />
        </MarketProvider>
      </Box>
    </Box>
  );
}

export default App;
