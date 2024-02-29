import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";
import Header from "../components/header/header";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";
import MainWrapper from "../components/main/main-container";

function ChannelPage() {
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelName);

  return (
    <Box>
      <Header />
      <LeftChannelList />
      <MainWrapper>
        <Box></Box>
      </MainWrapper>
    </Box>
  );
}

export default ChannelPage;
