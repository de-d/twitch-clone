import { useSelector } from "react-redux";
import { RootState } from "../redux/types";
import Header from "../components/header/header";
import TwitchChatEmbed from "../components/main/stream/chat";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";
import StreamerAbout from "../components/main/stream/streamer-about";
import MainWrapper from "../components/main/main-container";
import { Box } from "@mui/material";

function StreamPage() {
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelInfo.broadcaster_login);
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);
  const src = `https://player.twitch.tv/?channel=${channelName}&parent=localhost`;

  let width = visible ? "1251px" : "1526px";

  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
      <Header />
      <LeftChannelList />
      <MainWrapper padding="50">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
          <iframe src={src} width={width} height="790" frameBorder="0" allowFullScreen></iframe>
          <StreamerAbout />
        </Box>
        <TwitchChatEmbed channel={channelName} parent="localhost" />
      </MainWrapper>
    </Box>
  );
}

export default StreamPage;
