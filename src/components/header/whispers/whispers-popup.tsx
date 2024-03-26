import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { setOpenWhispersPopup } from "../../../redux/actions/app-action";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import { Box, Button, TextField, Typography } from "@mui/material";
import SettingsICon from "../../../assets/settings-icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "../../../assets/search.svg";
import WhispersMessages from "./whispers-elements";

function WhispersPopup() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openWhispersPopup);

  function handleClose() {
    dispatch(setOpenWhispersPopup(false));
  }

  const whisperMessagesData = [
    { name: "vs_code", message: "Какое-то сообщение" },
    { name: "evelone193", message: "Какое-то сообщение" },
    { name: "huh", message: "Какое-то сообщение" },
    { name: "egregregreghert", message: "Какое-то сообщение" },
    { name: "brff", message: "Какое-то сообщение" },
    { name: "квикхантиклох", message: "Какое-то сообщение" },
  ];
  return (
    <Popup open={open}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "#1e1e1e",
          top: 35,
          left: 1270,
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
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "center", width: "265px", fontSize: "14px", fontWeight: "bold", marginLeft: "50px" }}>
            Whispers
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
        <Box
          sx={{
            padding: "5px 10px",
            borderTopColor: "gray",
            borderTopWidth: "1px",
            borderTop: "1px solid #2b2b31",
            borderBottom: "1px solid #2b2b31",
          }}
        >
          <TextField
            InputProps={{
              startAdornment: <img src={SearchIcon} alt="search" style={{ marginRight: "10px" }} />,
            }}
            sx={{
              minWidth: "380px",
              minHeight: "30px",
              color: "white",
              backgroundColor: "#18181b",
              "& .MuiInputBase-root": {
                height: "30px",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": {
                height: "36px",
                padding: "2",
                color: "white",
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
                borderWidth: "2px",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6034b2",
                borderWidth: "3px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray",
              },
            }}
            placeholder="Search for People"
          />
        </Box>
        <Box
          sx={{
            maxWidth: "400px",
            maxHeight: "200px",
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
          {whisperMessagesData.map((whisper) => (
            <WhispersMessages key={whisper.name} name={whisper.name} message={whisper.message} />
          ))}
        </Box>
      </Box>
    </Popup>
  );
}

export default WhispersPopup;
