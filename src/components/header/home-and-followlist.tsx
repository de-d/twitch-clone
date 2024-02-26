import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import HomeIcon from "../../assets/home-icon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HomeAndFollowList() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/home");
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", width: "384px", gap: "20px" }}>
      <Box sx={{ display: "flex", padding: "5px" }}>
        <Button sx={{ width: "40px", height: "40px", minWidth: 0 }} onClick={backToHome}>
          <img src={HomeIcon} alt="Twitch Glitch Purple" />
        </Button>
      </Box>
      <Button sx={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "white", fontWeight: "bold", textTransform: "none", padding: "0px" }}>
        Following
      </Button>
      <Button
        sx={{
          display: "flex",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
          padding: "0px",
        }}
      >
        Browse
      </Button>
      <IconButton sx={{ padding: "0px 0px 0px 10px" }}>
        <MoreVertIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

export default HomeAndFollowList;
