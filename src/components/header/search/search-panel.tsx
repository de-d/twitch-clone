import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { setSearchChannelName } from "../../../redux/actions/channel-action";
import { fetchSearchChannels } from "../../../redux/api/actions";
import Search from "../../../assets/search.svg";
import HeaderSearchList from "./search-list";

function SearchPanel() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [active, setActive] = useState(false);
  const searchChannelName = useSelector((state: RootState) => state.searchChannelState.channelName);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const currentInputValue = e.target.value;
    dispatch(setSearchChannelName(currentInputValue));
  }

  function handleSearchButtonClick() {
    navigate("/search");
    dispatch(fetchSearchChannels(searchChannelName));
    setActive(false);
  }
  function handleActive() {
    setTimeout(() => setActive(false), 2000);
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "7px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          sx={{
            height: "36px",
            "& .MuiInputBase-root": {
              height: "36px",
              borderRadius: "6px 0px 0px 6px",
            },
            "& .MuiInputBase-input": {
              height: "36px",
              padding: "2",
              color: "white",
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6034b2",
              borderWidth: "3px",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6034b2",
              borderWidth: "2px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3c3b3b",
            },
            width: "356px",
            backgroundColor: "#8080800f",
            margin: "0",
          }}
          placeholder="Search"
          variant="outlined"
          autoComplete="off"
          onChange={handleSearch}
          onFocus={() => setActive(true)}
          onBlur={handleActive}
        />
        <Button
          sx={{
            width: "35px",
            height: "36px",
            backgroundColor: "#3c3b3b",
            minWidth: 0,
            padding: "0px",
            borderRadius: "0px 4px 4px 0px",
          }}
          onClick={handleSearchButtonClick}
        >
          <img src={Search} alt="search" />
        </Button>
      </Box>
      <Box>{active && <HeaderSearchList />}</Box>
    </Box>
  );
}
export default SearchPanel;
