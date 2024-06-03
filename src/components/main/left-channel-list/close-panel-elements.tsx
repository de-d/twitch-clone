import { Box } from "@mui/material";
import { TwitchUsersData } from "../../../redux/types";

type ClosePanelElementsProps = {
  followedUser: TwitchUsersData;
};

function ClosePanelElements({ followedUser }: ClosePanelElementsProps) {
  const style = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  };

  return (
    <Box>
      <img src={followedUser.profile_image_url} alt="avatar" style={style} />
    </Box>
  );
}

export default ClosePanelElements;
