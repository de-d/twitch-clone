import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { setOpenShareModal } from "../../../../redux/actions/app-action";
import TwitterXIcon from "../../../../assets/share-icons/twitterX-icon.svg";
import FacebookIcon from "../../../../assets/share-icons/facebook-icon.svg";
import VKIcon from "../../../../assets/share-icons/vk-icon.svg";
import RedditIcon from "../../../../assets/share-icons/reddit-icon.svg";
import EmbedIcon from "../../../../assets/share-icons/embed-icon.svg";
import UrlIcon from "../../../../assets/share-icons/url-icon.svg";

function ShareMenu() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openShareModal);

  const handleClose = () => {
    dispatch(setOpenShareModal(false));
  };

  const ShareData = [
    { name: "Twitter", icon: TwitterXIcon, bgColor: "#1da1f2" },
    { name: "Facebook", icon: FacebookIcon, bgColor: "#3b5998" },
    { name: "VK", icon: VKIcon, bgColor: "#45668e" },
    { name: "Reddit", icon: RedditIcon, bgColor: "#ff4500" },
    { name: "Embed", icon: EmbedIcon, bgColor: "#a970ff" },
    { name: "URL", icon: UrlIcon, bgColor: "#9147ff" },
  ];

  return (
    <Box>
      <Menu
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 835, left: 1300 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            backgroundColor: "#1f1f23",
            color: "white",
            width: "400px",
            height: "130px",
            padding: "0px 10px",
          },
        }}
        MenuListProps={{
          sx: {
            padding: 0,
          },
        }}
      >
        <Typography sx={{ fontSize: "13px", fontWeight: "bold", margin: "10px" }}>Share via</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          {ShareData.map((item) => (
            <MenuItem
              onClick={handleClose}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50px",
                height: "75px",
                padding: "0px",
                gap: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  bgcolor: `${item.bgColor}`,
                  transition: "transform 0.2s",
                  ":hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <img src={item.icon} alt="share" />
              </Box>
              <Typography sx={{ fontSize: "13px" }}>{item.name}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
}

export default ShareMenu;
