import { Box } from "@mui/material";
import HomeAndFollowList from "./header/home-and-followlist";
import SearchPanel from "./header/search-panel";
import Right from "./header/right";

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
      }}
    >
      <HomeAndFollowList />
      <SearchPanel />
      <Right />
    </Box>
  );
}

export default Header;
