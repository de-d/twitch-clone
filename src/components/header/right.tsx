import { Box, Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Bits from "../../assets/bits.svg";
import Whispers from "../../assets/Whispers.svg";
import Notifications from "../../assets/notifications.svg";

const butSx = {
  width: "20px",
  height: "20px",
  minWidth: 0,
  padding: "0px",
};

function Right() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center", width: "384px", gap: "20px" }}>
      <Button sx={butSx}>
        <img src={Notifications} alt="bits" />
      </Button>
      <Button sx={butSx}>
        <img src={Whispers} alt="bits" />
      </Button>
      <Button sx={butSx}>
        <img src={Bits} alt="bits" />
      </Button>
      <IconButton sx={{ paddingRight: "20px" }}>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
export default Right;
