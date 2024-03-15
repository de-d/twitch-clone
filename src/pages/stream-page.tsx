import { useEffect } from "react";
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

  let width = visible ? "1340px" : "1540px";
  let height = visible ? "770px" : "800px";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box>
      <Header />
      <LeftChannelList />
      <MainWrapper paddingClose="50" paddingOpen="240">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
          <iframe src={src} width={width} height={height} frameBorder="0" allowFullScreen></iframe>
          <StreamerAbout />
        </Box>
        <TwitchChatEmbed channel={channelName} parent="localhost" />
      </MainWrapper>
    </Box>
  );
}

export default StreamPage;
