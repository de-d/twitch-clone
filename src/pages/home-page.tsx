import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/types";
import {
  fetchUserID,
  fetchTopCategories,
  fetchTopStreams,
  fetchFollowedChannels,
  fetchFollowedStreams,
  fetchFollowedUsers,
} from "../redux/api/actions";
import { useCookies } from "react-cookie";
import { Box } from "@mui/material";
import Header from "../components/header/header";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";
import CategoriesCard from "../components/main/home/categories-card";
import TopStreamCard from "../components/main/home/stream-card";
import MainWrapper from "../components/main/main-container";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies, setCookie] = useCookies(["access_token"]);
  const topCategories = useSelector((state: RootState) => state.topCategory);
  const topStreams = useSelector((state: RootState) => state.topStream);
  const followingStreams = useSelector((state: RootState) => state.followingStreams);
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);
  const allFollowedChannels = useSelector((state: RootState) => state.user.followedChannels);

  useEffect(() => {
    const getAccessTokenFromHash = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1));
      return params.get("access_token");
    };

    const accessToken = getAccessTokenFromHash();

    if (accessToken) {
      setCookie("access_token", accessToken, { path: "/" });
    }
    const userToken = accessToken || cookies.access_token;

    dispatch(fetchUserID(userToken));
    dispatch(fetchTopCategories(userToken));
    dispatch(fetchTopStreams(userToken));
    dispatch(fetchFollowedStreams(userToken));
    dispatch(fetchFollowedChannels(userToken));
    dispatch(fetchFollowedUsers({ userLogins: allFollowedChannels, accessToken: userToken }));
  }, [dispatch, setCookie, cookies.access_token]);

  return (
    <Box>
      <Header />
      <LeftChannelList />
      <MainWrapper paddingClose="65" paddingOpen="260">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "white", fontWeight: "bold" }}>Categories</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              width: visible ? "1515px" : "auto",
              gap: "18px",
              overflowWrap: "normal",
              flexWrap: "wrap",
              borderBottom: "1px solid gray",
            }}
          >
            {topCategories.slice(0, visible ? 10 : 12).map((category) => (
              <CategoriesCard key={category.id} category={category} />
            ))}
          </Box>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "white", fontWeight: "bold" }}>Following live channels</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              width: visible ? "1515px" : "auto",
              gap: "15px",
              borderBottom: "1px solid gray",
              flexWrap: "wrap",
              paddingBottom: "15px",
            }}
          >
            {followingStreams.slice(0, visible ? 5 : 6).map((stream) => (
              <TopStreamCard key={stream.id} topStream={stream} />
            ))}
          </Box>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "white", fontWeight: "bold" }}>Top Steam</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              width: visible ? "1515px" : "auto",
              gap: "15px",
              borderBottom: "1px solid gray",
              flexWrap: "wrap",
            }}
          >
            {topStreams.slice(0, visible ? 15 : 18).map((stream) => (
              <TopStreamCard key={stream.id} topStream={stream} />
            ))}
          </Box>
        </Box>
      </MainWrapper>
    </Box>
  );
}

export default HomePage;
