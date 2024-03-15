import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { setOpenSubscribeModal } from "../../../../redux/actions/app-action";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import CloseIcon from "@mui/icons-material/Close";
import PartnerImg from "../../../../assets/partner.svg";
import ChannelPointsIcon from "../../../../assets/channel-points-icon.svg";
import AdFreeIcon from "../../../../assets/add-free-icon.svg";
import SubOnlyChatIcon from "../../../../assets/sub-only-icon.svg";
import SubStreamIcon from "../../../../assets/sub-streams-icon.svg";
import GiftSubIcon from "../../../../assets/gift-sub-icon.svg";
import SubIcon from "../../../../assets/sub-modal-icon.svg";
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
      <Popup open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            width: 470,
            height: 795,
            bgcolor: "#0e0e10",
            color: "white",
            top: "51px",
            left: "1110px",
          }}
        >
          <Box
            sx={{
              width: 430,
              height: 709,
              bgcolor: "#0e0e10",
              padding: "10px 20px",
              borderTopLeftRadius: "5px",
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
          </Box>
          <Box
            sx={{
              width: "430px",
              height: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              gap: "10px",
              bgcolor: "#18181b",
              padding: "20px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <Button
              sx={{ width: "105px", height: "30px", textTransform: "none", color: "white", bgcolor: "#2f2f35" }}
              startIcon={<img src={GiftSubIcon} alt="subscribe" />}
            >
              Gift a Sub
            </Button>
            <Button
              sx={{
                width: "220px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "110px",
                  height: "30px",
                  color: "white",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  backgroundColor: "#9147ff",
                }}
              >
                <img src={SubIcon} alt="subscribe" style={{ marginRight: "5px" }} /> Subscribe
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "30px",
                  color: "white",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  backgroundColor: "#7137c7",
                }}
              >
                RUB 130.00
              </Box>
            </Button>
          </Box>
        </Box>
      </Popup>
    </Box>
  );
}

export default SubscribeModal;
