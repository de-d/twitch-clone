import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { setOpenNotificationPopup } from "../../../redux/actions/app-action";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import { Box, Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SettingsICon from "../../../assets/settings-icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsItem from "./notifications-elements";
import TwitchIcon from "../../../assets/twitch-gray-icon.svg";
import NotificationImg from "../../../assets/notification-emote-icon.svg";

function NotificationsPopup() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openNotificationPopup);

  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleClose() {
    dispatch(setOpenNotificationPopup(false));
  }

  const notificationsData = [
    {
      text: "You are now eligible to get HUH  for MEH. To get your loot, claim your Drop by April 3, 2024 3:59:00 pm UTC on the Inventory page!",
      time: "1 day ago",
      type: "",
    },
    { text: "Your Sub to bratishkinoff has expired. Click here to go to the channel and resubscribe.", time: "5 days ago", type: "" },
    { text: "", time: "", type: "" },
    { text: "", time: "", type: "" },
    { text: "", time: "", type: "" },
    { text: "", time: "", type: "" },
  ];
  return (
    <Popup open={open}>
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          bgcolor: "#1e1e1e",
          top: 35,
          left: 1240,
          color: "white",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "center", width: "265px", fontSize: "14px", fontWeight: "bold", marginLeft: "50px" }}>
            Notifications
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", float: "right" }}>
            <Button sx={{ minWidth: "30px", minHeight: "30px", padding: "0px" }}>
              <img src={SettingsICon} alt="settings" />
            </Button>
            <Button sx={{ minWidth: "30px", minHeight: "30px", padding: "0px" }}>
              <CloseIcon
                sx={{
                  minWidth: "20px",
                  minHeight: "20px",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => handleClose()}
              />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderBottom: "1px solid #38383f" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="channel tabs"
                indicatorColor="none"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "end",
                  borderBottom: "1px solid #38383f",
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
                <Tab label="My Twitch" value="1" style={{ width: "200px", fontSize: "14px", color: "#be93fe", textTransform: "none" }} />
                <Tab label="My Channel" value="2" style={{ width: "200px", fontSize: "14px", color: "#be93fe", textTransform: "none" }} />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ color: "white", padding: "0px" }}>
              <Box
                sx={{
                  maxWidth: "400px",
                  maxHeight: "300px",
                  overflowX: "hidden",
                  overflowY: "auto",
                  position: "relative",
                  "&:hover": {
                    "&::-webkit-scrollbar": {
                      width: "5px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#555",
                      borderRadius: "5px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#333",
                    },
                  },
                  "&::-webkit-scrollbar": {
                    width: 0,
                  },
                }}
              >
                <Typography
                  sx={{ width: "100%", textAlign: "start", fontSize: "13px", fontWeight: "bold", color: "#848494", padding: "20px 0px 20px 20px" }}
                >
                  MOST RECENT
                </Typography>
                {notificationsData.map((notification) => (
                  <NotificationsItem text={notification.text} time={notification.time} type={notification.type} />
                ))}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55px", borderTop: "1px solid #313137" }}>
                  <img src={TwitchIcon} alt="twitchIcon" />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2" sx={{ color: "white" }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img src={NotificationImg} alt="emote" />
                <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "white", marginTop: "20px" }}>
                  You're all caught up. What a pro!
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "white", marginTop: "10px" }}>You have no messages.</Typography>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Popup>
  );
}

export default NotificationsPopup;
