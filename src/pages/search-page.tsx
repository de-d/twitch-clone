import Header from "../components/header";
import LeftChannelList from "../components/left-channel-list";
import SearchList from "../components/search/search-list";
import { Box, Typography } from "@mui/material";

function SearchPage() {
  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "row", pt: "50px" }}>
        <LeftChannelList />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", width: "1280px", pl: "50px", margin: "0 auto" }}>
          <Typography
            sx={{ width: "1280px", color: "white", fontWeight: "bold", fontSize: "20px", padding: "20px", borderBottom: "1px solid #737373" }}
          >
            Channels
          </Typography>
          <SearchList />
        </Box>
      </Box>
    </Box>
  );
}

export default SearchPage;
