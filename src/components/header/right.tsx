import { useState } from "react";
import { Box, Button, IconButton, Popper, Fade, Typography, Modal, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Bits from "../../assets/bits.svg";
import Whispers from "../../assets/Whispers.svg";
import Notifications from "../../assets/notifications.svg";
import GifTitleBits from "../../assets/bits/gif-title-bits.gif";
import GifTitle from "../../assets/bits/gif-title.gif";
import CloseIcon from "@mui/icons-material/Close";
import BitsPopperContent from "./bits/bits";

const butSx = {
  width: "20px",
  height: "20px",
  minWidth: 0,
  padding: "0px",
};

function Right() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center", width: "384px", gap: "20px" }}>
      <Button sx={butSx}>
        <img src={Notifications} alt="bits" />
      </Button>
      <Button sx={butSx}>
        <img src={Whispers} alt="bits" />
      </Button>
      <Modal open={open} onClose={() => setOpen(!open)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Paper
          sx={{
            position: "absolute",
            width: 400,
            bgcolor: "#1e1e1e",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <div
            style={{
              height: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1.0)",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Purchase Bits</Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              You have <img src={GifTitleBits} style={{ width: "18px", height: "18px" }} alt="bits" /> 0 Bits
            </Typography>

            <CloseIcon
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
                width: "30px",
                height: "30px",
                cursor: "pointer",
                color: "white",
              }}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              padding: "20px",
              borderBottom: "1px solid grey",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              <img src={GifTitle} style={{ width: "18px", height: "18px" }} alt="bits" />
              Use Bits to support streamers
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold", width: "300px" }}>
              When you use Bits in a channel, Twitch rewards the streamer and you create an exciting moment.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              padding: "10px 20px",
              borderBottom: "1px solid grey",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>Prices are shown in RUB and include VAT</Typography>
          </div>
          <div style={{ borderBottom: "1px solid grey" }}>
            <BitsPopperContent bits={300} price={348} />
          </div>
          <div style={{ borderBottom: "1px solid grey" }}>
            <BitsPopperContent bits={100} price={162} />
          </div>
          <div style={{ borderBottom: "1px solid grey" }}>
            <BitsPopperContent bits={500} price={809} />
          </div>
          <div style={{ borderBottom: "1px solid grey" }}>
            <BitsPopperContent bits={1500} price={2305} />
          </div>
          <div style={{ borderBottom: "1px solid grey" }}>
            <BitsPopperContent bits={5000} price={7439} />
          </div>
          <div style={{ borderBottom: "1px solid grey" }}>
            <BitsPopperContent bits={10000} price={14555} />
          </div>
          <div>
            <BitsPopperContent bits={25000} price={35575} />
          </div>
        </Paper>
      </Modal>
      <Button sx={butSx} onClick={() => setOpen(!open)}>
        <img src={Bits} alt="bits" />
      </Button>
      <IconButton sx={{ paddingRight: "20px" }}>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

export default Right;
