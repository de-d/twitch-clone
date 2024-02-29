import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/types";
import { setSearchChannelName, setSearchChannelInfo } from "../../../redux/actions/channel-action";
import { fetchUsers } from "../../../redux/api/actions";
import { SearchTwitchChannel } from "../../../redux/types";
import { Box, CardMedia, Typography } from "@mui/material";

type ChannelCardProps = {
  channel: SearchTwitchChannel;
};

function HeaderChannelCard({ channel }: ChannelCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const liveOrNot = useSelector((state: RootState) => state.searchChannelState.channelInfo.is_live);

  function handleClick() {
    dispatch(setSearchChannelName(channel.broadcaster_login));
    dispatch(setSearchChannelInfo(channel));
    dispatch(fetchUsers(channel.display_name));
    if (liveOrNot) {
      navigate("/stream/" + channel.broadcaster_login);
    } else if (!liveOrNot) {
      navigate("/search");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "390px",
        height: "40px",
        padding: "5px 0 5px 10px",
      }}
    >
      <Box>
        <CardMedia
          sx={{
            width: "30px",
            height: "30px",
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
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "20px" }}>
        <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "white" }}>{channel.display_name}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: "20px" }}>
        {channel.is_live && (
          <Typography
            sx={{ fontSize: "10px", fontWeight: "bold", color: "white", bgcolor: "red", borderRadius: "5px", padding: "2px 5px", marginLeft: "auto" }}
          >
            LIVE
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default HeaderChannelCard;
