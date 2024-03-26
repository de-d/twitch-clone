import Header from "../components/header/header";
import LeftChannelList from "../components/main/left-channel-list/left-channel-list";
import MainWrapper from "../components/main/main-container";
import SearchList from "../components/main/search/search-list";
import { Box, Typography } from "@mui/material";

function SearchPage() {
  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
      <Header />
      <LeftChannelList />
      <MainWrapper paddingClose="65" paddingOpen="260">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", width: "1280px", pl: "50px", margin: "0 auto" }}>
          <Typography
            sx={{ width: "1280px", color: "white", fontWeight: "bold", fontSize: "20px", padding: "20px", borderBottom: "1px solid #737373" }}
          >
            Channels
          </Typography>
          <SearchList />
        </Box>
      </MainWrapper>
    </Box>
  );
}

export default SearchPage;
