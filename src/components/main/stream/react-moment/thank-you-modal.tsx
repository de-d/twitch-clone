import { Box, Modal, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { setOpenThankYouModal } from "../../../../redux/actions/app-action";
import CloseIcon from "@mui/icons-material/Close";
import ReactM1 from "../../../../assets/react-moment/follow-purple.png";

function ThankYouForReactMoment() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.app.openThankYouModal);

  function handleClose() {
    dispatch(setOpenThankYouModal(false));
  }
  return (
    <Box>
      <Modal open={open} onClose={() => handleClose()} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Paper
          sx={{
            position: "absolute",
            width: 420,
            height: 287,
            bgcolor: "#0e0e10",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            padding: "10px 20px",
          }}
        >
          <Box>
            <Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>Thanks for sharing!</Typography>
              <CloseIcon sx={{ cursor: "pointer", position: "absolute", top: 5, right: 5 }} onClick={() => handleClose()} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "13px" }}>
                We'll deliver these reactions anonymously after the stream to give this streamer a snapshot of how viewers felt about key moments
                while they were live.
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>You can continue reacting every 5 minutes throughout this stream!</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "40px" }}>
              <img src={ReactM1} alt="ReactM1" style={{ width: "200", height: "200" }} />
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}

export default ThankYouForReactMoment;
