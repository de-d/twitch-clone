import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type MessageProps = {
  name: string;
  message: string;
};

function WhispersMessage({ name, message }: MessageProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "380px",
        height: "40px",
        padding: "10px",
        gap: "5px",
        borderBottom: "1px solid #313137",
      }}
    >
      <AccountCircleIcon sx={{ minWidth: "30px", minHeight: "30px", color: "white" }} />
      <Box>
        <Typography sx={{ width: "276px", fontSize: "14px", fontWeight: "bold", color: "white" }}>{name}</Typography>
        <Typography sx={{ width: "241px", fontSize: "12px", color: "white" }}>{message}</Typography>
      </Box>
    </Box>
  );
}

export default WhispersMessage;
