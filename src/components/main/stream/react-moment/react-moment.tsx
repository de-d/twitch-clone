import { useState } from "react";
import { Box, Button, Modal, Paper, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { setOpenReactMomentModal, setOpenThankYouModal } from "../../../../redux/actions/app-action";
import CloseIcon from "@mui/icons-material/Close";
import ReactM1 from "../../../../assets/react-moment/reactM1.png";
import ReactM2 from "../../../../assets/react-moment/reactM2.png";
import ReactM3 from "../../../../assets/react-moment/reactM3.png";
import ReactM4 from "../../../../assets/react-moment/reactM4.png";
import ReactM5 from "../../../../assets/react-moment/reactM5.png";

function ReactMoment() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openReactMomentModal);
  const [selectedValue, setSelectedValue] = useState("");

  function handleClose() {
    dispatch(setOpenReactMomentModal(false));
  }
  function handleOpen() {
    dispatch(setOpenThankYouModal(true));
    dispatch(setOpenReactMomentModal(false));
  }

  const commonStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "183px",
    alignItems: "center",
    width: "380px",
    margin: "10px 0",
    padding: "20px",
    borderRadius: "5px",
    bgcolor: "#18181b",
  };
  const radioOptions = [
    { value: "Hype", label: "Hype", imageSrc: ReactM1 },
    { value: "Funny", label: "Funny", imageSrc: ReactM2 },
    { value: "Love", label: "Love", imageSrc: ReactM3 },
    { value: "Whaaat?", label: "Whaaat?", imageSrc: ReactM4 },
    { value: "Oh no!", label: "Oh no!", imageSrc: ReactM5 },
  ];

  return (
    <Box>
      <Modal open={open} onClose={() => handleClose()} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Paper
          sx={{
            position: "absolute",
            width: 420,
            bgcolor: "#0e0e10",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            padding: "20px 30px",
          }}
        >
          <Box>
            <Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                <span style={{ color: "#bf94ff" }}>React </span>to moments in this stream
              </Typography>
              <CloseIcon sx={{ cursor: "pointer", position: "absolute", top: 5, right: 5 }} onClick={() => handleClose()} />
            </Box>
            <Typography sx={{ fontSize: "13px" }}>
              Let this streamer know how you feel about specific moments throughout the stream and we'll share your reactions with them anonymously.
              You can react every 5 minutes.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="top"
                  value={selectedValue}
                  onChange={(event) => setSelectedValue(event.target.value)}
                >
                  {radioOptions.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      sx={commonStyles}
                      value={option.value}
                      control={<Radio sx={{ color: "white", "&.Mui-checked": { color: "#bf94ff" } }} />}
                      label={option.label}
                      labelPlacement="start"
                      label={
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                          <img src={option.imageSrc} alt={option.label} style={{ width: "50px", height: "50px" }} />
                          <p style={{ width: "100px" }}>{option.label}</p>
                        </div>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <Box sx={{ margin: "0 auto" }}>
                <Button
                  sx={{
                    width: "65px",
                    height: "25px",
                    textTransform: "none",
                    color: "white",
                    bgcolor: "#9147ff",
                    "&.Mui-disabled": {
                      bgcolor: "#c8c8c8",
                      color: "grey",
                    },
                    ":hover": {
                      bgcolor: "#bf94ff",
                    },
                  }}
                  onClick={() => handleOpen()}
                  disabled={!selectedValue}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}

export default ReactMoment;
