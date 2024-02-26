import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/types";
import { fetchUserID, fetchTopCategories, fetchTopStreams } from "../redux/api/actions";
import { Box } from "@mui/material";
import Header from "../components/header";
import LeftChannelList from "../components/left-channel-list";
import CategoriesCard from "../components/home/categories-card";
import TopStreamCard from "../components/home/topstream-card";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const topCategories = useSelector((state: RootState) => state.topCategory);
  const topStreams = useSelector((state: RootState) => state.topStream);

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
      dispatch(fetchTopCategories(accessToken));
      dispatch(fetchTopStreams(accessToken));
    }
  }, [dispatch]);

  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
      <Header />
      <LeftChannelList />
      <Box sx={{ display: "flex", flexDirection: "column", padding: "60px 0 0 85px" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "white", fontWeight: "bold" }}>Categories</p>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: "15px", borderBottom: "1px solid gray" }}>
          {topCategories.slice(0, 12).map((category) => (
            <CategoriesCard key={category.id} category={category} />
          ))}
        </Box>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "white", fontWeight: "bold" }}>Top Steam</p>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: "15px", borderBottom: "1px solid gray", flexWrap: "wrap" }}>
          {topStreams.map((stream) => (
            <TopStreamCard key={stream.id} topStream={stream} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
