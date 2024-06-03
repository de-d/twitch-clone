import { Box, Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/types";
import { useCookies } from "react-cookie";
import { fetchFollowedStreams } from "../../../redux/api/actions";
import TopStreamCard from "../home/stream-card";
import ChannelCard from "../following/channel-card";

function TPanelFollowing() {
  const dispatch = useDispatch<AppDispatch>();
  const followingStreams = useSelector((state: RootState) => state.followingStreams);
  const followedUsers = useSelector((state: RootState) => state.followedUsersDetails);
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);
  const [value, setValue] = useState("1");

  const [cookies] = useCookies(["access_token"]);
  const userToken = cookies.access_token;

  useEffect(() => {
    if (userToken) {
      dispatch(fetchFollowedStreams(userToken));
    }
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="following tabs"
            indicatorColor="none"
            sx={{
              paddingBottom: "10px",
              "& .MuiTab-root": {
                minWidth: "0px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "white",
                textTransform: "none",
                padding: "0px 10px",
              },
              "& .MuiTab-root:first-of-type": {
                paddingLeft: 0,
                paddingRight: "10px",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#be93fe",
              },
              "& .MuiTab-root.Mui-selected::after": {
                backgroundColor: "#be93fe",
                height: "2px",
                content: "''",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
              },
            }}
          >
            <Tab label="Overview" value="1" />
            <Tab label="Live" value="2" />
            <Tab label="Videos" value="3" />
            <Tab label="Categories" value="4" />
            <Tab label="Channels" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ color: "white", padding: "0px" }}>
          <Box>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>Live channels</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              {followingStreams.slice(0, visible ? 10 : 12).map((stream) => (
                <TopStreamCard key={stream.id} topStream={stream} />
              ))}
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value="2" sx={{ color: "white", padding: "0px" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>Live channels</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {followingStreams.map((stream) => (
              <TopStreamCard key={stream.id} topStream={stream} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value="3" sx={{ color: "white", padding: "0px" }}></TabPanel>
        <TabPanel value="4" sx={{ color: "white", padding: "0px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", padding: "30px 0", bgcolor: "#26262c" }}>
            <Typography sx={{ fontSize: "18px", color: "#adadb3" }}>You can now follow your favorite games!</Typography>
            <Button sx={{ fontSize: "14px", fontWeight: "bold", textTransform: "none", color: "white", bgcolor: "#9147ff" }}>Find Out More!</Button>
          </Box>
        </TabPanel>
        <TabPanel value="5" sx={{ width: "1810px", color: "white", padding: "0px" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}> Followed channels</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
            {followedUsers && followedUsers.map((followedUser) => <ChannelCard key={followedUser.id} channel={followedUser} />)}
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default TPanelFollowing;
