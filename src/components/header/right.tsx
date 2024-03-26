import { Box, Button, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Bits from "../../assets/bits.svg";
import Whispers from "../../assets/Whispers.svg";
import Notifications from "../../assets/notifications.svg";
import BitsPopup from "./bits/bits-popup";
import { setOpenBitsPopup, setOpenNotificationPopup, setOpenTurboPopover, setOpenWhispersPopup } from "../../redux/actions/app-action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import TurboIcon from "../../assets/turbo-icon.svg";
import TurboPopover from "./turbo/turbo-element";
import WhispersPopup from "./whispers/whispers-popup";
import NotificationsPopup from "./notifications/notifications-popup";

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
  const openWhispersPopup = useSelector((state: RootState) => state.app.openWhispersPopup);
  const openNotificationPopup = useSelector((state: RootState) => state.app.openNotificationPopup);
  function handleOpenBitsPopup() {
    dispatch(setOpenBitsPopup(openBitsPopup ? false : true));
  }

  function handleOpenTurboPopover() {
    dispatch(setOpenTurboPopover(openTurboPopover ? false : true));
  }
  function handleOpenWhispersPopup() {
    dispatch(setOpenWhispersPopup(openWhispersPopup ? false : true));
  }

  function handleOpenNotificationPopup() {
    dispatch(setOpenNotificationPopup(openNotificationPopup ? false : true));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center", width: "384px", gap: "20px" }}>
      <Button sx={butSx} onClick={() => handleOpenNotificationPopup()}>
        <img src={Notifications} alt="notifications" />
      </Button>
      <NotificationsPopup />
      <Button sx={butSx} onClick={() => handleOpenWhispersPopup()}>
        <img src={Whispers} alt="whispers" />
      </Button>
      <WhispersPopup />
      <Button sx={butSx} onClick={() => handleOpenBitsPopup()}>
        <img src={Bits} alt="bits" />
      </Button>
      <BitsPopup />
      <Button
        sx={{ minWidth: 110, minHeight: 25, padding: "0px 8px", gap: "10px", bgcolor: "#2f2f35", ":hover": { bgcolor: "#2f2f35" } }}
        onClick={() => handleOpenTurboPopover()}
      >
        <img src={TurboIcon} alt="turbo" />
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
