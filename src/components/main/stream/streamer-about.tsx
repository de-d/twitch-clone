import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { Box, Typography } from "@mui/material";

function StreamerAbout() {
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelInfo.display_name);
  const channelAvatar = useSelector((state: RootState) => state.searchChannelState.channelInfo.thumbnail_url);
  const channelTitle = useSelector((state: RootState) => state.searchChannelState.channelInfo.title);
  const channelGame = useSelector((state: RootState) => state.searchChannelState.channelInfo.game_name);
  const channelTags = useSelector((state: RootState) => state.searchChannelState.channelInfo.tags);
  const categoryUrl = `https://www.twitch.tv/directory/category/${channelGame}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        width: "1510px",
        height: "117px",
        margin: "0px",
        padding: "10px",
        backgroundColor: "#161616",
      }}
    >
      <Box sx={{ width: "69px", height: "69px", border: "4px solid red", borderRadius: "50%" }}>
        <img
          src={channelAvatar}
          alt={channelName}
          title={channelName}
          style={{ width: "64px", height: "64px", borderRadius: "50%", padding: "2.5px" }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}> {channelName}</Typography>
        <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "12px" }}>{channelTitle}</Typography>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
          <a href={categoryUrl} target="_blank">
            <span style={{ color: "#755ebc", fontWeight: "bold", textDecoration: "underline" }}>{channelGame}</span>
          </a>
          {channelTags.map((tag) => (
            <Typography
              key={tag}
              sx={{ fontSize: "12px", fontWeight: "bold", color: "#808080", backgroundColor: "#2c2c2c", padding: "2px 10px", borderRadius: "15px" }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default StreamerAbout;
