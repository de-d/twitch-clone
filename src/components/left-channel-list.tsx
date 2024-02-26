import { Box, Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OpenFollowChannelLeftPanel from "../assets/LCL-icon.svg";
import FollowChannelsIcon from "../assets/follow-channels.svg";

function LeftChannelList() {
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
        backgroundColor: "#161616f2",
      }}
    >
      <Button sx={{ padding: "10px", width: "40px", height: "40px", minWidth: 0 }}>
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

export default LeftChannelList;
