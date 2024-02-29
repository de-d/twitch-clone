import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { Padding } from "@mui/icons-material";

interface MainWrapperProps {
  children: ReactNode;
  padding?: string;
}

function MainWrapper({ children, padding }: MainWrapperProps) {
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);
  return (
    <Box
      sx={{
        margin: "0px",
        paddingLeft: visible ? "275px" : `${padding}px`,
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
