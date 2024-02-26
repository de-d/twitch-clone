import { useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { fetchUserID } from "../redux/api/actions";
import { Box, Button, Typography } from "@mui/material";
import Logo from "../assets/home-icon.svg";

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const userToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (userToken) {
      localStorage.setItem("access_token", userToken);
      dispatch(fetchUserID(userToken));
    }
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
          width: "500px",
          height: "400px ",
          background: "#17111e",
          borderRadius: "10px",
          padding: "10px 0 0 0",
        }}
      >
        <img src={Logo} alt="logo" style={{ width: "80px", height: "80px" }} />
        <Box
          sx={{
            display: "flex",
            width: "450px",
            height: "50px ",
            justifyContent: "center",
            padding: "20px 0px 70px 0px",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Log in to Twitch Clone
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{ color: "white", backgroundColor: "#6441a5", padding: "10px 40px", ":hover": { backgroundColor: "#6441a5" } }}
            href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:3000/home&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=state"
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
