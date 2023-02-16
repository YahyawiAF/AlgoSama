import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as CloseModal } from "../../../assets/icons/CloseModal.svg";

import { ReactComponent as Send } from "../../../assets/icons/Send.svg";
import { height } from "@mui/system";

export default function Discuttion() {
  const [message, setShowMessage] = useState(false);
  return (
    <Box
      width={"300px"}
      height={"400px"}
      sx={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "25%",
          background:
            "linear-gradient(180deg, #ED6A9E 55.21%, rgba(237, 106, 158, 0) 71.35%)",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>
          <ListItemText
            primary="Algosama"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline", fontSize: "12px" }}
                  color="text.primary"
                >
                  We typically reply in a few minutes
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </Box>
      <Box paddingTop={"10px"} height={"60%"}>
        <ListItem
          alignItems="flex-start"
          sx={{
            top: "-40px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Typography>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "30px", height: "30px", right: "0px" }}
            />
          </Typography>

          <Typography
            fontSize={"12px"}
            right={"0px"}
            sx={{ background: "#F3F3F3", height: "50px", padding: "5px" }}
          >
            Check your E-mail we will contact you as soon as possible
          </Typography>
        </ListItem>
        <ListItem
          alignItems="flex-start"
          sx={{
            top: "-40px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Typography>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "30px", height: "30px", right: "0px" }}
            />
          </Typography>

          <Typography
            fontSize={"12px"}
            right={"0px"}
            sx={{ background: "#F3F3F3", height: "50px", padding: "5px" }}
          >
            You can send an email directly to AlgoSama@outlook.com
          </Typography>
        </ListItem>
      </Box>
      {/* <Divider sx={{ border: "1px solid #000000", width: "100%" }} /> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "10px",
          paddingTop: "10px",
        }}
      >
        {/* <Typography>
          <TextField
            id="standard-multiline-flexible"
            // label=
            placeholder="Write here..."
            multiline
            maxRows={4}
            //   value={value}
            //   onChange={handleChange}
            variant="standard"
            disabled={true}
          />
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "10px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <Send />
        </Typography> */}
      </Box>
    </Box>
  );
}
