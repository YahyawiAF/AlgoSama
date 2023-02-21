import { Box, Button, Popover, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LandingImg from "../../../assets/images/LandingImg.png";
import Map from "../../../assets/images/Map.png";
import { useRef } from "react";
import { ReactComponent as DropDown } from "../../../assets/icons/DropDown.svg";
import { ReactComponent as Message } from "../../../assets/icons/Message.svg";
import ModalDialog from "@mui/joy/ModalDialog";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import CustomizedDialogs from "./ModalStarted";
import Discuttion from "./Discuttion";
import { useState } from "react";
import Image_of_algosama from "../../../assets/images/AlgosamaWhite.png";
import SecondSection from "./SecondSection";
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Josefin Sans",
  fontStyle: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "0px",

  color: "#FFFFFF",
  fontSize: "52px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

const ButtonStart = styled(Button)(({ theme }) => ({
  width: "300px",
  height: "66px",
  fontSize: "24px",

  background: "#ED6A9E",
  boxShadow: "0px 27px 24px rgba(0, 0, 0, 0.3)",
  borderRadius: "55.5px",
  [theme.breakpoints.down("sm")]: {
    width: "170px",
    height: "35px",
    fontSize: "15px",
  },
}));
const Image = styled(Button)(({ theme }) => ({
  // [theme.breakpoints.down("sm")]: {
  //   width: "170px",
  //   height: "35px",
  //   fontSize: "15px",
  // },
}));

const FirstSection = () => {
  const [show, setShow] = useState<boolean>(false);

  const ref = useRef<any>(null);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <CustomizedDialogs show={show} onClose={handleClose} />
      <Box
        sx={{
          backgroundColor: "black",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "5% ",
            paddingRight: "20%",
            paddingLeft: "20%",
            paddingBottom: "0%",

            gap: "60px",
          }}
          id="home"
        >
          <Image>
            <img src={Image_of_algosama} width="80"></img>
          </Image>
          <Title>We help startups go faster</Title>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ButtonStart variant="contained" onClick={() => setShow(true)}>
              Getting STARTED
            </ButtonStart>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Typography>
          <Image>
            <img src={LandingImg} width="80%" />
          </Image>
        </Box>
        <Box
          sx={{
            paddingTop: "5% ",
            paddingRight: "5%",
            paddingLeft: "5%",
            paddingBottom: "5%",
          }}
        >
          <SecondSection></SecondSection>
        </Box>
      </Box>
    </>
  );
};

export default FirstSection;
