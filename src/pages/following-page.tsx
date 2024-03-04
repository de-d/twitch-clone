import { Box, Typography } from "@mui/material";
import Header from "../components/header/header";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";
import MainWrapper from "../components/main/main-container";

function FollowingPage() {
  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
      <Header />
      <LeftChannelList />
      <MainWrapper padding="50">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100vh", margin: "400px 0 0 0" }}>
          <Typography sx={{ color: "white" }}>Скоро...</Typography>
        </Box>
      </MainWrapper>
    </Box>
  );
}

export default FollowingPage;
