import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { Box, Button } from "@mui/material";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import { setOpenTurboPopover } from "../../../redux/actions/app-action";
import CloseIcon from "@mui/icons-material/Close";
import TurboHeader from "../../../assets/turbo-header.svg";
import TurboViewingIcon from "../../../assets/turbo-viewing-icon.svg";
import TurboEBSIcon from "../../../assets/turbo-ebs-icon.svg";
import TurboBadge from "../../../assets/turbo-chat-badge-icon.svg";
import TurboEmoteIcon from "../../../assets/turbo-emote-icon.svg";
import TurboCusColIcon from "../../../assets/turbo-cuscol-icon.svg";

function TurboPopover() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openTurboPopover);

  function handleClose() {
    dispatch(setOpenTurboPopover(false));
  }

  const turboThanksData = [
    { icon: TurboBadge, text: "Exclusive Chat Badge", width: "100px" },
    { icon: TurboEmoteIcon, text: "Two additional emoticon sets (monkey & Glitch)", width: "100px" },
    { icon: TurboCusColIcon, text: "Custom Chat Username Colors", width: "100px" },
  ];

  return (
    <Popup open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "#1e1e1e",
          top: "380px",
          left: "1650px",
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 110,
          borderRadius: "5px",
        }}
      >
        <Box
          style={{
            height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1.0)",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>Watch Ad Free with Turbo</Typography>

          <CloseIcon
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              width: "30px",
              height: "30px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => handleClose()}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <img src={TurboHeader} alt="turbo" />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>Go Ad-Free on Every Stream</Typography>
            <Typography sx={{ fontSize: "14px", color: "gray" }}>RUB 312.99/month</Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>Support streamers without interruptions.</Typography>
          </Box>
          <Box sx={{ margin: "10px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
              <img src={TurboViewingIcon} alt="turbo" style={{ margin: "0 10px auto 0" }} />
              <Box>
                <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>Ad-free viewing</Typography>
                <Typography sx={{ fontSize: "12px", color: "gray" }}>
                  Watch your favorite streamers without video or banner ads, except as part of channel sponsorships. You may still see
                  streamer-enabled promotions on channels and Twitch-promoted content on non-channel pages.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
              <img src={TurboEBSIcon} alt="turbo" style={{ margin: "0 10px auto 0" }} />
              <Box>
                <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>Extended Broadcast Storage (60 days)</Typography>
                <Typography sx={{ fontSize: "12px", color: "gray" }}>Store your VODs for up to 60 days instead of 14.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "10px", margin: "10px" }}>
          {turboThanksData.map((item, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
              <img src={item.icon} alt="channel points" style={{ width: "20px", height: "20px" }} />
              <Typography sx={{ width: item.width, fontSize: "12px", textAlign: "center" }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", margin: "10px" }}>
          <Typography sx={{ fontSize: "12px", color: "gray" }}>Billed Monthly • Cancel Anytime</Typography>
          <Typography
            sx={{
              textAlign: "center",
              width: "340px",
              fontSize: "12px",
              color: "gray",
            }}
          >
            The price below is an estimate and may be adjusted as part of our regional pricing program. Final price will be disclosed at checkout.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", margin: "10px", paddingTop: "20px" }}>
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
                fontWeight: "bold",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                backgroundColor: "#9147ff",
              }}
            >
              <img src={TurboBadge} alt="subscribe" style={{ marginRight: "5px" }} /> Subscribe
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                width: "100px",
                height: "30px",
                color: "white",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "#7137c7",
              }}
            >
              RUB 312.99
            </Box>
          </Button>
        </Box>
      </Box>
    </Popup>
  );
}

export default TurboPopover;
