import { topStream } from "../../../redux/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setSearchChannelName } from "../../../redux/actions/channel-action";
import { Box, CardMedia, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import formatViewerCount from "../../utils/formatViewer";

type TopStreamCardProps = {
  topStream: topStream;
};
const getBoxArtUrl = (boxArtUrl: string, width: number, height: number): string => {
  return boxArtUrl.replace("{width}", width.toString()).replace("{height}", height.toString());
};

function TopStreamCard({ topStream }: TopStreamCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const boxArtUrl = getBoxArtUrl(topStream.thumbnail_url, 290, 165);

  function handleClick() {
    dispatch(setSearchChannelName(topStream.user_login));
  }

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          ":hover": {
            cursor: "pointer",
            "& img": {
              transform: "translate(5px, -5px)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "294px",
              height: "165px",
              backgroundColor: "#9147ff",
              borderRadius: "5px",
              transition: "transform 0.2s ease-in-out",
            },
          },
        }}
      >
        <CardMedia
          sx={{
            width: "290px",
            height: "165px",
            borderRadius: "5px",
            transition: "transform 0.2s ease-in-out",
            ":hover": {
              cursor: "pointer",
            },
          }}
          component="img"
          image={boxArtUrl}
          alt={topStream.user_name}
          title={topStream.user_name}
          onClick={handleClick}
        />
        <p
          style={{
            position: "absolute",
            bottom: "127px",
            left: "10px",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            color: "white",
            fontWeight: "bold",
            padding: "2px 6px 2px 6px",
            borderRadius: "5px",
            backgroundColor: "red",
          }}
        >
          LIVE
        </p>
        <p
          style={{
            position: "absolute",
            bottom: "0px",
            left: "10px",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            color: "white",
            fontWeight: "bold",
            padding: "2px 6px 2px 6px",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {formatViewerCount(topStream.viewer_count)} viewers
        </p>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", maxWidth: "290px", margin: "5px 0 0 0" }}>
        <IconButton sx={{ padding: "5px 10px 0 0" }}>
          <AccountCircleIcon sx={{ color: "white", width: "40px", height: "40px" }} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "2px" }}>
          <p
            style={{
              maxWidth: "240px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "start",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              color: "white",
              fontWeight: "bold",
              margin: "0px",
              padding: "3px 0 0 0",
            }}
            title={topStream.title}
          >
            {topStream.title}
          </p>
          <p style={{ textAlign: "start", fontFamily: "Roboto, sans-serif", fontSize: "12px", color: "gray", fontWeight: "bold", margin: "0px" }}>
            {topStream.user_name}
          </p>
          <p
            style={{
              maxWidth: "240px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "start",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: "gray",
              fontWeight: "bold",
              margin: "0px",
            }}
          >
            {topStream.game_name}
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default TopStreamCard;
