import { Box, Button, Typography } from "@mui/material";
import OpenFollowChannelLeftPanel from "../../../assets/LCL-icon.svg";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { setVisibleLeftChannelPanel } from "../../../redux/actions/user-action";
import ChannelInfo from "./channel-info";

function OpenPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const topStreams = useSelector((state: RootState) => state.topStream);
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);

  function visiblePanel() {
    dispatch(setVisibleLeftChannelPanel(false));
  }
  if (visible) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
          top: 50,
          width: "240px",
          height: "100vh",
          backgroundColor: "#1f1f23",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Typography sx={{ paddingLeft: "10px", fontWeight: "bold", color: "white" }}>For You</Typography>
          <Button sx={{ padding: "10px", width: "40px", height: "40px", minWidth: 0, rotate: "180deg" }} onClick={visiblePanel}>
            <img src={OpenFollowChannelLeftPanel} alt="open" />
          </Button>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ paddingLeft: "10px", fontWeight: "bold", color: "white" }}>Top streams</Typography>
          {topStreams.map((stream) => (
            <ChannelInfo key={stream.id} topStream={stream} />
          ))}
        </Box>
      </Box>
    );
  }
}

export default OpenPanel;
