import { Box, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

type NotificationsProps = {
  text: string;
  time: string;
  type: string;
};

function NotificationsItem({ text, time, type }: NotificationsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        width: "360px",
        maxHeight: "130px",
        padding: "10px 20px",
        gap: "5px",
      }}
    >
      <Brightness1Icon sx={{ minWidth: "46px", minHeight: "46px", color: "white" }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Typography sx={{ width: "276px", fontSize: "13px", color: "white" }}>{text}</Typography>
        <Typography sx={{ width: "276px", fontSize: "11px", color: "#848494" }}>{time}</Typography>
      </Box>
    </Box>
  );
}

export default NotificationsItem;
