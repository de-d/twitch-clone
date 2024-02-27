import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";

interface MainWrapperProps {
  children: ReactNode;
}

function MainWrapper({ children }: MainWrapperProps) {
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);
  return (
    <Box
      sx={{
        margin: "0px",
        paddingLeft: visible ? "275px" : "65px",
        paddingTop: "50px",
        width: visible ? "calc(1820px - 275px)" : "1820px",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
}

export default MainWrapper;
