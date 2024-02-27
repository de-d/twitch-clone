import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchChannelName, setSearchChannelInfo } from "../../../redux/actions/channel-action";
import { SearchTwitchChannel } from "../../../redux/types";
import { Box, CardMedia, Typography } from "@mui/material";

type ChannelCardProps = {
  channel: SearchTwitchChannel;
};

function ChannelCard({ channel }: ChannelCardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_login } = useParams();

  function handleClick() {
    navigate(`/stream/${user_login}`);
    dispatch(setSearchChannelName(channel.broadcaster_login));
    dispatch(setSearchChannelInfo(channel));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        padding: "20px",
        border: "1px solid #808080",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ border: channel.is_live ? "5px solid red" : "none", borderRadius: "50%" }}>
        <CardMedia
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          component="img"
          image={channel.thumbnail_url}
          alt={channel.display_name}
          title={channel.display_name}
          onClick={handleClick}
        />
      </Box>
      <Box sx={{ paddingLeft: "20px" }}>
        <Typography sx={{ fontWeight: "bold", color: "white" }}>{channel.display_name}</Typography>
        {channel.is_live && <Typography sx={{ fontWeight: "bold", color: "white" }}>{channel.title}</Typography>}
      </Box>
    </Box>
  );
}

export default ChannelCard;
