import { Box } from "@mui/material";
import React from "react";

interface TwitchChatEmbedProps {
  channel: string;
  parent: string;
  height?: string | number;
  width?: string | number;
}

const TwitchChatEmbed: React.FC<TwitchChatEmbedProps> = ({ channel, parent, height = "904", width = "340" }) => {
  const src = `https://www.twitch.tv/embed/${encodeURIComponent(channel)}/chat?parent=${encodeURIComponent(parent)}`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        position: "fixed",
        right: 0,
        bottom: 0,
      }}
    >
      <iframe
        id="twitch-chat-embed"
        src={src}
        height={height}
        width={width}
        frameBorder="0"
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-modals"
      />
    </Box>
  );
};

export default TwitchChatEmbed;
