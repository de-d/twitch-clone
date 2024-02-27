import { Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { topStream } from "../../../redux/types";
import formatViewerCount from "../../utils/formatViewer";

type TopStreamCardProps = {
  topStream: topStream;
};

function ChannelInfo({ topStream }: TopStreamCardProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", width: "100%" }}>
      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
      <Box>
        <Typography sx={{ fontSize: "12px", fontWeight: "bold", paddingLeft: "10px", color: "white" }}>{topStream.user_name}</Typography>
        <Typography sx={{ fontSize: "10px", paddingLeft: "10px", color: "gray" }}>{topStream.game_name}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: "10px" }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "red",
            marginRight: -0.5,
          }}
        />
        <Typography
          sx={{
            fontSize: "13px",
            paddingLeft: "10px",
            color: "white",
          }}
        >
          {formatViewerCount(topStream.viewer_count)}
        </Typography>
      </Box>
    </Box>
  );
}

export default ChannelInfo;
