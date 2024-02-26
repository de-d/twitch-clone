import { useSelector } from "react-redux";
import { RootState } from "../redux/types";
import Header from "../components/header";
import TwitchChatEmbed from "../components/chat";
import LeftChannelList from "../components/left-channel-list";
import StreamerAbout from "../components/streamer-about";
import { Box } from "@mui/material";

function StreamPage() {
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelName);
  const src = `https://player.twitch.tv/?channel=${channelName}&parent=localhost`;

  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "row", pt: "50px" }}>
        <LeftChannelList />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", pl: "50px" }}>
          <iframe src={src} height="790" width="1526" frameBorder="0" allowFullScreen></iframe>
          <StreamerAbout />
        </Box>
        <TwitchChatEmbed channel={channelName} parent="localhost" />
      </Box>
    </Box>
  );
}

export default StreamPage;
