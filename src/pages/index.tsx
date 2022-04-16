import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Rightbar from "@/components/Rightbar";
import Navbar from "@/components/Navbar";
import Add from "@/components/Add";
import { useState } from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";

const Home: NextPage = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
