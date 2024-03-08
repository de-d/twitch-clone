import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";
import Header from "../components/header/header";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";
import MainWrapper from "../components/main/main-container";
import TPanel from "../components/main/channel/tab-panel";
import partnerImg from "../assets/partner.svg";

function ChannelPage() {
  const channelNameFromUrl = useSelector((state: RootState) => state.searchChannelState.channelName);
  const channelName = useSelector((state: RootState) => state.searchUsers.display_name);
  const channelAvatar = useSelector((state: RootState) => state.searchChannelState.channelInfo.thumbnail_url);
  const channelTitle = useSelector((state: RootState) => state.searchUsers.description);
  const channelGame = useSelector((state: RootState) => state.searchChannelState.channelInfo.game_name);
  const partnerOrNot = useSelector((state: RootState) => state.searchUsers.broadcaster_type);

  const channelCreated = useSelector((state: RootState) => state.searchUsers.created_at);
  const channelCreatedDate = new Date(channelCreated);
  const formattedDate = channelCreatedDate.toLocaleDateString();

  const backgroundUrl = useSelector((state: RootState) => state.searchUsers.offline_image_url);
  const liveOrNot = useSelector((state: RootState) => state.searchChannelState.channelInfo.is_live);
  const src = `https://player.twitch.tv/?channel=${channelNameFromUrl}&parent=localhost&autoplay=true`;

  return (
    <Box>
      <Header />
      <LeftChannelList />
      <MainWrapper padding="50">
        <Box sx={{ position: "absolute", zIndex: 1 }}>
          {liveOrNot ? (
            <iframe src={src} width="1853" height="1042" frameBorder="0" allowFullScreen></iframe>
          ) : backgroundUrl === "" ? (
            <div style={{ width: "1853px", height: "100vh", backgroundColor: "grey" }}></div>
          ) : (
            <img src={backgroundUrl} alt="channel" style={{ width: "1853px", height: "100vh" }} />
          )}
        </Box>
        {liveOrNot ? (
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              width: "320px",
              height: "300px",
              margin: "50px 0 0 40px",
              borderRadius: "10px",
              bgcolor: "#1f1f23",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                width: "260px",
                height: "239px",
                margin: "auto",
                padding: "20px",
              }}
            >
              <Typography
                sx={{ fontSize: "12px", fontWeight: "bold", color: "white", width: "60px", bgcolor: "red", borderRadius: "5px", padding: "2px" }}
              >
                LIVE NOW
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
                {channelName} is streaming {channelGame}
              </Typography>
            </Box>
          </Box>
        ) : null}
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            width: "1820px",
            height: "462px",
            margin: "580px 0 0 0",
            borderTopRightRadius: "10px",
            bgcolor: "#0e0e10",
          }}
        >
          <Box sx={{ width: "100%", height: "100%", margin: "0px 30px", padding: "20px 0 0 0" }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", paddingLeft: "20px" }}>
              <img
                src={channelAvatar}
                alt={channelName}
                title={channelName}
                style={{ width: "74px", height: "74px", borderRadius: "50%", padding: "2.5px" }}
              />
              <Box>
                <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
                  {channelName} {partnerOrNot === "partner" ? <img src={partnerImg} alt="partner" /> : null}
                </Typography>
                <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "12px" }}>??? followers</Typography>
              </Box>
            </Box>
            <TPanel channelName={channelName} channelTitle={channelTitle} />
          </Box>
        </Box>
      </MainWrapper>
    </Box>
  );
}

export default ChannelPage;
