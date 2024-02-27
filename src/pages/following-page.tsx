import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchUserID } from "../redux/api/actions";
import { Box } from "@mui/material";
import Header from "../components/header/header";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";

function FollowingPage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getAccessTokenFromHash = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1));
      return params.get("access_token");
    };

    const accessToken = getAccessTokenFromHash();

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      dispatch(fetchUserID(accessToken));
    }
  }, [dispatch]);

  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
      <Header />
      <LeftChannelList />
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "white", fontWeight: "bold" }}>Top Steam</p>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: "15px", borderBottom: "1px solid gray", flexWrap: "wrap" }}></Box>
    </Box>
  );
}

export default FollowingPage;
