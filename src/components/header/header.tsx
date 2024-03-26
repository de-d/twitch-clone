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
        height: "50px",
        width: "100%",
        backgroundColor: "#18181b",
        zIndex: 1100,
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
