import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Home from "./pages/home/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={4}>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
