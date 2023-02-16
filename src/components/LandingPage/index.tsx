import FirstSection from "./Section/FirstSection";
import SecondSection from "./Section/SecondSection";
import ThirdSection from "./Section/ThirdSection";
import FourthSection from "./Section/FourthSection";
import { ReactComponent as DropDown } from "../../assets/icons/DropDown.svg";
import { ReactComponent as Message } from "../../assets/icons/Message.svg";
import { Box, Button, Popover, TextField, Typography } from "@mui/material";

import { useState, useRef } from "react";

import Footer from "~/layouts/MainLayout/Footer/Footer";

function HomePage() {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "100px",
          }}
        >
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default HomePage;
