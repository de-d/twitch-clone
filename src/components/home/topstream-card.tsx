import { topStream } from "../../redux/types";
import { Box, CardMedia, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type TopStreamCardProps = {
  topStream: topStream;
};
const getBoxArtUrl = (boxArtUrl: string, width: number, height: number): string => {
  return boxArtUrl.replace("{width}", width.toString()).replace("{height}", height.toString());
};

function TopStreamCard({ topStream }: TopStreamCardProps) {
  const boxArtUrl = getBoxArtUrl(topStream.thumbnail_url, 290, 165);

  return (
    <Box>
      <Box>
        <CardMedia sx={{ width: "290px", height: "165px" }} component="img" image={boxArtUrl} alt={topStream.user_name} title={topStream.user_name} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
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
          >
            {topStream.title}
          </p>
          <p style={{ textAlign: "start", fontFamily: "Roboto, sans-serif", fontSize: "12px", color: "gray", fontWeight: "bold", margin: "0px" }}>
            {topStream.user_name}
          </p>
          <p style={{ textAlign: "end", fontFamily: "Inter, sans-serif", fontSize: "12px", color: "gray", fontWeight: "bold", margin: "0px" }}>
            {topStream.game_name}
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default TopStreamCard;
//293 165
