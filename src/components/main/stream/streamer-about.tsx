import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/types";
import { setOpenReactMomentModal, setOpenSubscribeModal } from "../../../redux/actions/app-action";
import { Box, Typography, Button } from "@mui/material";
import partnerImg from "../../../assets/partner.svg";
import CloseIcon from "@mui/icons-material/Close";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ReactMoment from "./react-moment/react-moment";
import ThankYouForReactMoment from "./react-moment/thank-you-modal";
import SubscribeModal from "./subscribe/subscribe-modal";
import ChannelAvatar from "../../main/channel/channel-avatar";
import { fetchChannelEmotes, fetchChannelBadges } from "../../../redux/api/actions";

function StreamerAbout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelInfo.display_name);
  const channelTitle = useSelector((state: RootState) => state.searchChannelState.channelInfo.title);
  const channelGame = useSelector((state: RootState) => state.searchChannelState.channelInfo.game_name);
  const channelTags = useSelector((state: RootState) => state.searchChannelState.channelInfo.tags);
  const partnerOrNot = useSelector((state: RootState) => state.searchUsers.broadcaster_type);
  const categoryUrl = `https://www.twitch.tv/directory/category/${channelGame}`;
  const openLeftPanel = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);

  const openOrCloseSubModal = useSelector((state: RootState) => state.app.openSubscribeModal);

  const channelId = useSelector((state: RootState) => state.searchUsers.id);

  let width = openLeftPanel ? "1251px" : "1526px";

  useEffect(() => {
    dispatch(fetchChannelEmotes(channelId));
    dispatch(fetchChannelBadges(channelId));
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        width: width,
        height: "117px",
        margin: "0px",
        padding: "10px",
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
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", margin: "18px 15px auto auto" }}>
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
          startIcon={<FavoriteBorderIcon sx={{ width: "18px", height: "18px", paddingBottom: "1px" }} />}
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
              width: "100px",
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
            onClick={() => handleOpenSubscribeModal()}
          >
            Subscribe
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            startIcon={<StarBorderIcon sx={{ width: "18px", height: "18px", paddingBottom: "1px" }} />}
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
    </Box>
  );
}

export default StreamerAbout;
