import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Template from "../../../assets/images/Template.png";
import Responsive_image from "../../../assets/images/eed.png";
import React from "react";
import Map from "../../../assets/images/Map.png";
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Josefin Sans",
  fontStyle: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "40px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },

  color: "#FFFFFF",
}));

const PartOne = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "2% ",
          paddingRight: "20%",
          paddingLeft: "20%",
          paddingBottom: "5%",

          backgroundColor: "black",
          backgroundPositionY: "center !important",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          gap: "40px",
        }}
        id="realisation"
      >
        <Title variant="h1">Our Templates</Title>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Template} width={"100%"} />
        </Typography>
      </Box>
      <Box
        sx={{
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} md={8}>
            <>
              <img src={Responsive_image} width={"100%"} />
            </>
          </Grid>
          <Grid item xs={12} md={4}>
            <>
              {" "}
              <h1 style={{ textAlign: "start" }}>
                We work on responsive web site{" "}
              </h1>
              <p style={{ textAlign: "start" }}>
                A responsive website is a website that automatically adapts to
                various screen sizes, without losing its readability and
                functionality. Designing a responsive website offers tremendous
                benefits, including better user experience, increased traffic,
                and better online presence.
              </p>
            </>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Title>
          {" "}
          <h1 style={{ color: "black", textDecoration: "underline" }}>
            client that have confidence on as
          </h1>
        </Title>
      </Box>
    </>
  );
};

export default PartOne;
