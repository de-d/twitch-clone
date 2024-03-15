import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/types";
import { setOpenReactMomentModal, setOpenSubscribeModal } from "../../../redux/actions/app-action";
import { Box, Typography, Button } from "@mui/material";
import partnerImg from "../../../assets/partner.svg";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ReactMoment from "./react-moment/react-moment";
import ThankYouForReactMoment from "./react-moment/thank-you-modal";
import SubscribeModal from "./subscribe/subscribe-modal";
import ChannelAvatar from "../../main/channel/channel-avatar";
import ViewerCountIcon from "../../../assets/viewer-count-icon.svg";
import FollowIcon from "../../../assets/follow-icon.svg";
import HoverFollowIcon from "../../../assets/hover-follow-icon.svg";
import SubIcon from "../../../assets/sub-icon.svg";
import ShareIcon from "../../../assets/share-icon.svg";
import ReportIcon from "../../../assets/report-icon.svg";
import { fetchUserStreamInfo, fetchChannelEmotes, fetchChannelBadges } from "../../../redux/api/actions";

function StreamerAbout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelInfo.display_name);
  const channelTitle = useSelector((state: RootState) => state.searchChannelState.channelInfo.title);
  const channelGame = useSelector((state: RootState) => state.searchChannelState.channelInfo.game_name);
  const channelTags = useSelector((state: RootState) => state.searchChannelState.channelInfo.tags);
  const viewerCount = useSelector((state: RootState) => state.userStreamInfo.viewer_count);

  const startedAt = useSelector((state: RootState) => state.userStreamInfo.started_at);
  const startTime = new Date(startedAt);
  const endTime = new Date();

  const timeDifference = endTime.getTime() - startTime.getTime();

  const hours = Math.floor(timeDifference / 3600000);
  const minutes = Math.floor((timeDifference % 3600000) / 60000);
  const seconds = Math.floor((timeDifference % 60000) / 1000);

  const partnerOrNot = useSelector((state: RootState) => state.searchUsers.broadcaster_type);
  const categoryUrl = `https://www.twitch.tv/directory/category/${channelGame}`;
  const openLeftPanel = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);

  const openOrCloseSubModal = useSelector((state: RootState) => state.app.openSubscribeModal);

  const channelId = useSelector((state: RootState) => state.searchUsers.id);

  let width = openLeftPanel ? "1321px" : "1510px";

  useEffect(() => {
    dispatch(fetchChannelEmotes(channelId));
    dispatch(fetchChannelBadges(channelId));
    dispatch(fetchUserStreamInfo(channelId));
  }, [dispatch, channelId]);

  function handleClick() {
    navigate(`/channel/${channelName}`);
  }

  function handleOpenReactMomentModal() {
    dispatch(setOpenReactMomentModal(true));
  }

  function handleOpenSubscribeModal() {
    dispatch(setOpenSubscribeModal(true));
  }
  function handleCloseSubscribeModal() {
    dispatch(setOpenSubscribeModal(false));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        width: width,
        height: "110px",
        margin: "0px",
        padding: "0 10px",
        backgroundColor: "#0e0e10",
        borderTop: "1px solid #1f1f23",
      }}
    >
      <ChannelAvatar widthAvatar="69px" heightAvatar="69px" widthBorder="64px" heightBorder="64px" borderRight="-16px" borderTop="60px" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }} onClick={handleClick}>
          {" "}
          {channelName}
          {partnerOrNot === "partner" ? <img src={partnerImg} alt="partner" /> : null}
        </Typography>
        <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "12px" }}>{channelTitle}</Typography>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
          <a href={categoryUrl} target="_blank">
            <span style={{ color: "#755ebc", fontWeight: "bold", textDecoration: "underline" }}>{channelGame}</span>
          </a>
          {channelTags.map((tag) => (
            <Typography
              key={tag}
              sx={{ fontSize: "12px", fontWeight: "bold", color: "#808080", backgroundColor: "#2c2c2c", padding: "2px 10px", borderRadius: "15px" }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "335px", flexDirection: "column", alignItems: "start", gap: "10px", margin: "auto 15px auto auto" }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", margin: "0 0 0 auto" }}>
          <Button
            variant="text"
            startIcon={<AddReactionIcon sx={{ width: "18px", height: "18px", paddingBottom: "1px" }} />}
            sx={{
              width: "78px",
              height: "30px",
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "none",
              color: "#bf94ff",
              ":hover": { color: "white" },
            }}
            onClick={() => handleOpenReactMomentModal()}
          >
            React
          </Button>
          <ReactMoment />
          <ThankYouForReactMoment />
          <Button
            variant="contained"
            size="small"
            startIcon={<img src={FollowIcon} alt="follow" />}
            sx={{
              width: "85px",
              height: "30px",
              color: "white",
              fontWeight: "bold",
              bgcolor: "#9147ff",
              fontSize: "12px",
              textTransform: "none",
              ":hover": {
                bgcolor: "#7137c7",
                "& img": {
                  content: `url(${HoverFollowIcon})`,
                },
              },
            }}
          >
            Follow
          </Button>
          {openOrCloseSubModal ? (
            <Button
              variant="contained"
              size="small"
              startIcon={<CloseIcon sx={{ width: "18px", height: "18px", paddingBottom: "1px" }} />}
              sx={{
                width: "80px",
                height: "30px",
                color: "white",
                fontWeight: "bold",
                bgcolor: "#2f2f35",
                fontSize: "12px",
                textTransform: "none",
                ":hover": {
                  bgcolor: "#2f2f35",
                },
              }}
              onClick={() => handleCloseSubscribeModal()}
            >
              Close
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              startIcon={<img src={SubIcon} alt="subscribe" />}
              endIcon={<ExpandMoreIcon sx={{ width: "18px", height: "18px", paddingBottom: "1px" }} />}
              sx={{
                width: "130px",
                height: "30px",
                color: "white",
                fontWeight: "bold",
                bgcolor: "#9147ff",
                fontSize: "12px",
                textTransform: "none",
                ":hover": {
                  bgcolor: "#7137c7",
                },
              }}
              onClick={() => handleOpenSubscribeModal()}
            >
              Subscribe
            </Button>
          )}
          <SubscribeModal />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", margin: "0 0 0 auto" }}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>
            <img src={ViewerCountIcon} alt="viewer" />
            <Typography sx={{ color: "#ff8280", fontWeight: "bold", fontSize: "13px" }}>{viewerCount}</Typography>
          </Box>
          <Typography sx={{ color: "white", fontSize: "13px", fontWeight: "bold" }}>
            {hours}:{minutes}:{seconds}
          </Typography>
          <Button style={{ maxWidth: "30px", maxHeight: "30px", minWidth: "30px", minHeight: "30px" }}>
            <img src={ShareIcon} alt="share" style={{ width: "18px", height: "18px" }} />
          </Button>
          <Button style={{ maxWidth: "30px", maxHeight: "30px", minWidth: "30px", minHeight: "30px" }}>
            <img src={ReportIcon} alt="report" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default StreamerAbout;
