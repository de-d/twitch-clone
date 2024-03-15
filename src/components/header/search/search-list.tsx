import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { AppDispatch } from "../../../redux/store";
import { fetchSearchChannels, fetchUsers } from "../../../redux/api/actions";

import HeaderChannelCard from "./channel-card";
import { Box } from "@mui/material";

function HeaderSearchList() {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.searchChannelDetail);
  const searchChannelName = useSelector((state: RootState) => state.searchChannelState.channelName);

  useEffect(() => {
    dispatch(fetchSearchChannels(searchChannelName));
  }, [dispatch, searchChannelName]);

  return (
    <Box
      sx={{
        width: "390px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        bgcolor: "#161616f2",
      }}
    >
      <Box sx={{ gap: "20px" }}>
        {search.slice(0, 3).map((channel) => (
          <HeaderChannelCard key={channel.id} channel={channel} />
        ))}
      </Box>
    </Box>
  );
}

export default HeaderSearchList;
