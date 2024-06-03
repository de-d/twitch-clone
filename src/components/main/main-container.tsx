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
        width: visible ? `100% - ${paddingOpen}px` : `100% - ${paddingClose}px`,
        height: "94.9vh",
        overflow: "auto",
        zIndex: 100,
      }}
    >
      {children}
    </Box>
  );
}

export default MainWrapper;
