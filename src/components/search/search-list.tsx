import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { AppDispatch } from "../../redux/store";
import { fetchSearchChannels } from "../../redux/api/actions";
import ChannelCard from "./channel-card";
import { Box } from "@mui/material";

function SearchList() {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.searchChannelDetail);
  const searchChannelName = useSelector((state: RootState) => state.searchChannelState.channelName);

  useEffect(() => {
    dispatch(fetchSearchChannels(searchChannelName));
  }, [dispatch, searchChannelName]);

  return (
    <Box sx={{ padding: "52px", margin: "0px", gap: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {search.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} />
      ))}
    </Box>
  );
}

export default SearchList;
