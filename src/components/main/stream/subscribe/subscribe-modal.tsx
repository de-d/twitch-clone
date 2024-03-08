import { Box, Modal, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { setOpenSubscribeModal } from "../../../../redux/actions/app-action";
import CloseIcon from "@mui/icons-material/Close";
import PartnerImg from "../../../../assets/partner.svg";
import ChannelPointsIcon from "../../../../assets/channel-points-icon.svg";
import AdFreeIcon from "../../../../assets/add-free-icon.svg";
import SubOnlyChatIcon from "../../../../assets/sub-only-icon.svg";
import SubStreamIcon from "../../../../assets/sub-streams-icon.svg";
import ChannelAvatar from "../../channel/channel-avatar";
import SubscribeEmote from "./sub-emote";
import SubscribeBadges from "./sub-badges";

function SubscribeModal() {
  const dispatch = useDispatch();
  const subscribeEmote = useSelector((state: RootState) => state.emote);
  const subscribeBadges = useSelector((state: RootState) => state.badges);
  const open = useSelector((state: RootState) => state.app.openSubscribeModal);
  const channelName = useSelector((state: RootState) => state.searchChannelState.channelInfo.display_name);
  const channelTitle = useSelector((state: RootState) => state.searchUsers.description);
  const partnerOrNot = useSelector((state: RootState) => state.searchUsers.broadcaster_type);
  const emoteCount = useSelector((state: RootState) => state.emote);
  const numberOfEmotes = Object.keys(emoteCount).length;

  function handleClose() {
    dispatch(setOpenSubscribeModal(false));
  }

  const subThanksData = [
    { icon: ChannelPointsIcon, text: "Channel Points 1.2x", width: "100px" },
    { icon: AdFreeIcon, text: "Ad-Free Viewing", width: "80px" },
    { icon: SubOnlyChatIcon, text: "Sub-Only Chat", width: "50px" },
    { icon: SubStreamIcon, text: "Subscriber Streams", width: "100px" },
  ];

  return (
    <Box>
      <Modal open={open} onClose={() => handleClose()} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Paper
          sx={{
            position: "absolute",
            width: 430,
            height: 755,
            bgcolor: "#0e0e10",
            top: "46.5%",
            left: "69.5%",
            transform: "translate(-50%, -50%)",
            color: "white",
            padding: "10px 20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <ChannelAvatar widthAvatar="89px" heightAvatar="89px" widthBorder="84px" heightBorder="84px" borderRight="-28px" borderTop="80px" />
            <Box sx={{ paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                {channelName}
                {partnerOrNot === "partner" ? <img src={PartnerImg} alt="partner" /> : null}
              </Typography>
              <Typography sx={{ width: "285px", height: "40px", fontSize: "13px" }}>{channelTitle}</Typography>
            </Box>
            <CloseIcon sx={{ cursor: "pointer", position: "absolute", top: 5, right: 5 }} onClick={() => handleClose()} />
          </Box>
          <Box sx={{ paddingTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>As a thank you from {channelName}:</Typography>
            <Typography sx={{ fontSize: "13px" }}>
              <span style={{ fontWeight: "bold" }}>{numberOfEmotes} Custom Emotes</span> to express yourself in chat
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
              {subscribeEmote.map((emote) => (
                <SubscribeEmote key={emote.id} emote={emote} />
              ))}
            </Box>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Sub Badges</span> to wear in chat to show how long you've been there
            </Typography>
            <Box>{subscribeBadges.subscriber && subscribeBadges.subscriber.map((badge) => <SubscribeBadges key={badge.id} badge={badge} />)}</Box>
            <Typography sx={{ fontWeight: "bold" }}>And don't forget...</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "10px" }}>
              {subThanksData.map((item, index) => (
                <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                  <img src={item.icon} alt="channel points" style={{ width: "20px", height: "20px" }} />
                  <Typography sx={{ width: item.width, fontSize: "12px", textAlign: "center" }}>{item.text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}

export default SubscribeModal;
