import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

type TabProps = {
  channelName: string;
  channelTitle: string;
};

function TPanel({ channelName, channelTitle }: TabProps) {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="channel tabs"
            indicatorColor="none"
            sx={{
              "& .MuiTab-root.Mui-selected::after": {
                backgroundColor: "#be93fe",
                height: "3px",
                content: "''",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
              },
            }}
          >
            <Tab label="Home" value="1" style={{ fontSize: "14px", fontWeight: "bold", color: "#be93fe" }} />
            <Tab label="About" value="2" style={{ fontSize: "14px", fontWeight: "bold", color: "#be93fe" }} />
            <Tab label="Schedule" value="3" style={{ fontSize: "14px", fontWeight: "bold", color: "#be93fe" }} />
            <Tab label="Videos" value="4" style={{ fontSize: "14px", fontWeight: "bold", color: "#be93fe" }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ color: "white" }}>
          Скоро...
        </TabPanel>
        <TabPanel value="2" sx={{ color: "white" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", margin: "0px 280px" }}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>About {channelName}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                width: "100%",
                height: "150px",
                borderRadius: "10px",
                padding: "20px",
                bgcolor: "#18181b",
              }}
            >
              <Typography sx={{ color: "white", fontSize: "14px" }}>??? followers</Typography>
              <Typography sx={{ color: "white", fontSize: "14px" }}>{channelTitle}</Typography>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value="3" sx={{ color: "white" }}>
          Скоро...
        </TabPanel>
        <TabPanel value="4" sx={{ color: "white" }}>
          Скоро...
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default TPanel;
