import { Box, Typography } from "@mui/material";
import Header from "../components/header/header";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";
import MainWrapper from "../components/main/main-container";
import TPanel from "../components/main/following/tab-panel";

function FollowingPage() {
  return (
    <Box sx={{ height: "100vh", margin: "0px", padding: "0px" }}>
      <Header />
      <LeftChannelList />
      <MainWrapper paddingClose="50" paddingOpen="240">
        <Box sx={{ padding: "25px 35px" }}>
          <Typography sx={{ fontSize: "54px", fontWeight: "bold", color: "white" }}>Following</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100vh" }}>
            <TPanel />
          </Box>
        </Box>
      </MainWrapper>
    </Box>
  );
}

export default FollowingPage;
