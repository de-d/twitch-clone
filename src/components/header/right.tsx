import { Box, Button, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Bits from "../../assets/bits.svg";
import Whispers from "../../assets/Whispers.svg";
import Notifications from "../../assets/notifications.svg";
import BitsPopup from "./bits/bits-popup";
import { setOpenBitsPopup, setOpenTurboPopover } from "../../redux/actions/app-action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import TurboIcon from "../../assets/turbo-icon.svg";
import TurboPopover from "./turbo/turbo-element";

const butSx = {
  width: "20px",
  height: "20px",
  minWidth: 0,
  padding: "0px",
};

function Right() {
  const dispatch = useDispatch();
  const openBitsPopup = useSelector((state: RootState) => state.app.openBitsPopup);
  const openTurboPopover = useSelector((state: RootState) => state.app.openTurboPopover);
  function handleOpenBitsPopup() {
    dispatch(setOpenBitsPopup(openBitsPopup ? false : true));
  }

  function handleOpenTurboPopover() {
    dispatch(setOpenTurboPopover(openTurboPopover ? false : true));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center", width: "384px", gap: "20px" }}>
      <Button sx={butSx}>
        <img src={Notifications} alt="bits" />
      </Button>
      <Button sx={butSx}>
        <img src={Whispers} alt="bits" />
      </Button>
      <Button sx={butSx} onClick={() => handleOpenBitsPopup()}>
        <img src={Bits} alt="bits" />
      </Button>
      <BitsPopup />
      <Button
        sx={{ minWidth: 110, minHeight: 25, padding: "0px 8px", gap: "10px", bgcolor: "#2f2f35", ":hover": { bgcolor: "#2f2f35" } }}
        onClick={() => handleOpenTurboPopover()}
      >
        <img src={TurboIcon} alt="bits" />
        <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "white", textTransform: "none" }}>Get Ad-Free</Typography>
      </Button>
      <TurboPopover />
      <IconButton sx={{ paddingRight: "20px" }}>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

export default Right;
