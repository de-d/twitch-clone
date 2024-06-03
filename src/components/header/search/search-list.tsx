import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { AppDispatch } from "../../../redux/store";
import { useCookies } from "react-cookie";
import { setOpenSearchModal } from "../../../redux/actions/app-action";
import { fetchSearchChannels } from "../../../redux/api/actions";
import { Popper, Paper } from "@mui/material";

import HeaderChannelCard from "./channel-card";
import { Box } from "@mui/material";

function HeaderSearchList() {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["access_token"]);
  const search = useSelector((state: RootState) => state.searchChannelDetail);
  const searchChannelName = useSelector((state: RootState) => state.searchChannelState.channelName);
  const open = useSelector((state: RootState) => state.app.openSearchModal);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    dispatch(fetchSearchChannels({ channelName: searchChannelName, accessToken: cookies.access_token }));
  }, [dispatch, searchChannelName]);

  const handleClose = () => {
    dispatch(setOpenSearchModal(false));
  };

  return (
    <Paper elevation={0}>
      <Popper
        id="search-results-popper"
        open={open}
        anchorEl={anchorEl}
        placement="auto"
        transition
        style={{
          position: "fixed",
          width: "400px",
          height: "auto",
          top: 5,
          left: 751,
          borderRadius: "5px",
          paddingTop: "45px",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 21px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#18181b",
          zIndex: 1200,
        }}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [110, 10],
            },
          },
        ]}
      >
        <Box
          sx={{
            backgroundColor: "#18181b",
            color: "white",
            padding: "5px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            zIndex: 1300,
          }}
        >
          {search.slice(0, 3).map((channel) => (
            <HeaderChannelCard key={channel.id} channel={channel} />
          ))}
        </Box>
      </Popper>
    </Paper>
  );
}

export default HeaderSearchList;
