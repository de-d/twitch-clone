import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import HomeIcon from "../../assets/home-icon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HomeAndFollowList() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/home");
  }
  function goToFollowing() {
    navigate("/following");
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", width: "384px", gap: "20px" }}>
      <Box sx={{ display: "flex", padding: "5px" }}>
        <Button sx={{ width: "40px", height: "40px", minWidth: 0 }} onClick={backToHome}>
          <img src={HomeIcon} alt="Twitch Glitch Purple" />
        </Button>
      </Box>
      <Button
        sx={{
          minWidth: 70,
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
          padding: "0px",
        }}
        onClick={goToFollowing}
      >
        Following
      </Button>
      <Button
        sx={{
          display: "flex",
          minWidth: 60,
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
      <IconButton sx={{ minWidth: 30 }}>
        <MoreVertIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

export default HomeAndFollowList;
