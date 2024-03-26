import { Box, Typography } from "@mui/material";
import { TwitchUsersData } from "../../../redux/types";

type ChannelCardProps = {
  channel: TwitchUsersData;
};

function ChannelCard({ channel }: ChannelCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "345px",
        height: "195px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${channel.offline_image_url})`,
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={channel.profile_image_url} alt="avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
        <Typography>{channel.display_name}</Typography>
      </Box>
    </Box>
  );
}

export default ChannelCard;
