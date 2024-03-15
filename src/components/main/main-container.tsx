import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";

interface MainWrapperProps {
  children: ReactNode;
  paddingClose?: string;
  paddingOpen?: string;
}

function MainWrapper({ children, paddingClose, paddingOpen }: MainWrapperProps) {
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);
  return (
    <Box
      sx={{
        paddingLeft: visible ? `${paddingOpen}px` : `${paddingClose}px`,
        paddingTop: "50px",
        width: visible ? "1340px" : "1820px",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
}

export default MainWrapper;
