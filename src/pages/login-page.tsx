import { useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { fetchUserID } from "../redux/api/actions";
import { Box, Button, Typography } from "@mui/material";
import Logo from "../assets/home-icon.svg";
import GitHubIcon from "@mui/icons-material/GitHub";

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const userToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (userToken) {
      localStorage.setItem("access_token", userToken);
      dispatch(fetchUserID(userToken)); //старый вариант
    }
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          width: "450px",
          height: "300px ",
          background: "#17111e",
          borderRadius: "10px",
          padding: "10px 0 0 0",
        }}
      >
        <img src={Logo} alt="logo" style={{ width: "60px", height: "60px" }} />
        <Box
          sx={{
            display: "flex",
            width: "350px",
            height: "50px ",
            justifyContent: "center",
            padding: "15px 0 40px 0",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Log in to Twitch Clone
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", flexDirection: "column", alignItems: "center" }}>
          <Button
            sx={{ width: "250px", color: "white", backgroundColor: "#6441a5", padding: "10px 40px", ":hover": { backgroundColor: "#6441a5" } }}
            href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:5173/home&scope=user:read:follows&scope=user:read:email&state=c3ab8aa609ea11e793ae92361f002671"
          >
            Log in
          </Button>
          <Button
            sx={{ width: "150px", color: "white", backgroundColor: "#808080", padding: "10px 40px", ":hover": { backgroundColor: "#808080" } }}
            href="https://github.com/de-d"
          >
            <GitHubIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
