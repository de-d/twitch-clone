import { Box } from "@mui/material";
import { TwitchUsersData } from "../../../redux/types";

type ClosePanelElementsProps = {
  followedUser: TwitchUsersData;
};

function ClosePanelElements({ followedUser }: ClosePanelElementsProps) {
  return (
    <Box>
      <img src={followedUser.profile_image_url} alt="avatar" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />
    </Box>
  );
}

export default ClosePanelElements;
