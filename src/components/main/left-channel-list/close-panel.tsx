import { Box, Button, IconButton } from "@mui/material";
import { AppDispatch } from "../../../redux/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OpenFollowChannelLeftPanel from "../../../assets/LCL-icon.svg";
import FollowChannelsIcon from "../../../assets/follow-channels.svg";
import { useDispatch } from "react-redux";
import { setVisibleLeftChannelPanel } from "../../../redux/actions/user-action";

function ClosePanel() {
  const dispatch = useDispatch<AppDispatch>();

  function visiblePanel() {
    dispatch(setVisibleLeftChannelPanel(true));
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: 50,
        width: "50px",
        height: "100vh",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Button sx={{ padding: "10px", width: "40px", height: "40px", minWidth: 0 }} onClick={visiblePanel}>
        <img src={OpenFollowChannelLeftPanel} alt="open" />
      </Button>
      <Box sx={{ padding: "10px" }}>
        <img src={FollowChannelsIcon} alt="follow" />
      </Box>

      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

export default ClosePanel;
