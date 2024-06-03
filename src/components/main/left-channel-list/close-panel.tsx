import { Box, Button } from "@mui/material";
import { AppDispatch } from "../../../redux/store";
import OpenFollowChannelLeftPanel from "../../../assets/LCL-icon.svg";
import FollowChannelsIcon from "../../../assets/follow-channels.svg";
import ClosePanelElements from "./close-panel-elements";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { setVisibleLeftChannelPanel } from "../../../redux/actions/user-action";

function ClosePanel() {
  const dispatch = useDispatch<AppDispatch>();
  const followedUsers = useSelector((state: RootState) => state.followedUsersDetails);

  function visiblePanel() {
    dispatch(setVisibleLeftChannelPanel(true));
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50px",
        overflow: "auto",
        overflowX: "hidden",
        overflowY: "auto",
        position: "fixed",
        "&:hover": {
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "5px",
            height: "100%",
            pointerEvents: "none",
            background: "transparent",
          },
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#555",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#333",
          },
        },
        "&::-webkit-scrollbar": {
          width: 0,
        },
        top: 50,
        height: "94.5vh",
        backgroundColor: "#1f1f23",
      }}
    >
      <Button sx={{ padding: "10px", width: "40px", height: "40px", minWidth: 0 }} onClick={visiblePanel}>
        <img src={OpenFollowChannelLeftPanel} alt="open" />
      </Button>
      <Box sx={{ padding: "10px" }}>
        <img src={FollowChannelsIcon} alt="follow" />
      </Box>
      {followedUsers && followedUsers.map((followedUser) => <ClosePanelElements key={followedUser.id} followedUser={followedUser} />)}
    </Box>
  );
}

export default ClosePanel;
