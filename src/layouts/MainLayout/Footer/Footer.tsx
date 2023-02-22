import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as Facebook } from "../../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/Instagram.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/Linkedin.svg";
import { ReactComponent as Mail } from "../../../assets/icons/Mail.svg";
import { ReactComponent as Phone } from "../../../assets/icons/Phone.svg";
import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// const FooterContent = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "100%",
//   gap: "400px",

//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//     gap: "20px",
//     paddingTop: "20px",
//     paddingBottom: "20px",
//   },
// }));

const Footer = () => {
  return (
    // <Box
    //   sx={{
    //     background: "black",
    //     width: "100%",
    //     height: "100%",
    //   }}
    // >
    //   <Divider sx={{ border: "2px solid #FFFFFF", width: "100%" }} />
    //   <FooterContent
    //     sx={
    //       {
    //         // display: "flex",
    //         // alignItems: "center",
    //         // justifyContent: "center",
    //       }
    //     }
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         alignItems: "center",

    //         // justifyContent: "start",
    //         // paddingLeft: "300px",
    //         // paddingBottom: "50px",
    //         // paddingTop: "90px",
    //         gap: "20px",
    //       }}
    //     >
    //       <IconButton href="https://www.facebook.com/AlgoSama-102888506041022">
    //         <Facebook />
    //       </IconButton>

    //       {/* <IconButton >
    //         <Instagram />
    //       </IconButton> */}
    //       <IconButton href="https://www.linkedin.com/in/yahyawi-abdel-fatteh-675468141/">
    //         <Linkedin />
    //       </IconButton>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "20px",
    //         padding: "20px",
    //         // paddingRight: "300px",
    //       }}
    //     >
    //       <Typography
    //         sx={{
    //           display: "flex",
    //           alignItems: "center",

    //           gap: "20px",
    //         }}
    //       >
    //         <Mail />
    //         <Typography fontSize={"32p"} color={"#FFFFFF"}>
    //           abdelftt@gmail.com
    //         </Typography>
    //       </Typography>
    //       <Divider sx={{ border: "2px solid #FFFFFF", width: "250px" }} />
    //       <Typography
    //         sx={{
    //           display: "flex",
    //           alignItems: "center",
    //           gap: "20px",
    //         }}
    //       >
    //         <Phone />
    //         <Typography fontSize={"32p"} color={"#FFFFFF"}>
    //           +216 27 802 073
    //         </Typography>
    //       </Typography>
    //     </Box>
    //   </FooterContent>
    // </Box>
    <>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "20px",
          padding: "1%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Grid container spacing={0}>
          <Grid xs={12} md={3}>
            <>
              <PhoneAndroidIcon sx={{ fontSize: 30 }} />
              <div>+216 27 802 073</div>
            </>
          </Grid>
          <Grid item xs={12} md={3}>
            <>
              <EmailIcon sx={{ fontSize: 30 }}></EmailIcon>
              <div>abdelftt@gmail.com</div>
            </>
          </Grid>
          <Grid item xs={12} md={3}>
            <>
              <MyLocationIcon sx={{ fontSize: 30 }}></MyLocationIcon>
              <div>tunis tunisia </div>
            </>
          </Grid>
          <Grid item xs={12} md={3}>
            <>
              <FacebookIcon sx={{ fontSize: 30 }}></FacebookIcon>
              <LinkedInIcon sx={{ fontSize: 30 }}></LinkedInIcon>
            </>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
