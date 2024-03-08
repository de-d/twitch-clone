import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { Box, Typography } from "@mui/material";

type ChannelAvatarProps = {
  widthAvatar: string;
  heightAvatar: string;
  widthBorder: string;
  heightBorder: string;
  borderRight: string;
  borderTop: string;
};

function ChannelAvatar({ widthAvatar, heightAvatar, widthBorder, heightBorder, borderRight, borderTop }: ChannelAvatarProps) {
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelInfo.display_name);
  const channelAvatar = useSelector((state: RootState) => state.searchChannelState.channelInfo.thumbnail_url);
  const liveOrNot = useSelector((state: RootState) => state.searchChannelState.channelInfo.is_live);

  return (
    <Box sx={{ width: `${widthAvatar}`, height: `${heightAvatar}`, border: "3px solid red", borderRadius: "50%" }}>
      {liveOrNot ? (
        <Box>
          <img
            src={channelAvatar}
            alt={channelName}
            title={channelName}
            style={{ position: "absolute", width: `${widthBorder}`, height: `${heightBorder}`, borderRadius: "50%", padding: "2.5px" }}
          />
          <Typography
            sx={{
              width: "25px",
              height: "15px",
              color: "white",
              fontWeight: "bold",
              fontSize: "12px",
              bgcolor: "red",
              borderRadius: "5px",
              padding: "2px 5px",
              position: "relative",
              right: `${borderRight}`,
              top: `${borderTop}`,
            }}
          >
            LIVE
          </Typography>
        </Box>
      ) : (
        <img src={channelAvatar} alt="channel" />
      )}
    </Box>
  );
}

export default ChannelAvatar;
