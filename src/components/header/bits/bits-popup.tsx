import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import BitsPopperContent from "./bits-elements";
import { Box, Typography } from "@mui/material";
import GifTitleBits from "../../../assets/bits/gif-title-bits.gif";
import GifTitle from "../../../assets/bits/gif-title.gif";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";

import { setOpenBitsPopup } from "../../../redux/actions/app-action";

function BitsPopup() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openBitsPopup);

  function handleClose() {
    dispatch(setOpenBitsPopup(false));
  }
  return (
    <Popup open={open}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "#1e1e1e",
          top: 35,
          left: 1320,
          color: "white",
          borderRadius: "5px",
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
            onClick={() => handleClose()}
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
          <Typography sx={{ fontSize: "12px", fontWeight: "bold", width: "300px", zIndex: 13 }}>
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
      </Box>
    </Popup>
  );
}

export default BitsPopup;
