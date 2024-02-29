import { Box } from "@mui/material";
import HomeAndFollowList from "./home-and-followlist";
import SearchPanel from "./search/search-panel";
import Right from "./right";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        height: "50px",
        width: "100%",
        backgroundColor: "#161616f2",
        zIndex: 1100,
        padding: "0px",
        margin: "0px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1.0)",
      }}
    >
      <HomeAndFollowList />
      <SearchPanel />
      <Right />
    </Box>
  );
}

export default Header;
