import { Box, Typography } from "@mui/material";
import { SubBadges } from "../../../../redux/types";

type SubBadgesProps = {
  badge: SubBadges;
};

function SubscribeBadges({ badge }: SubBadgesProps) {
  return (
    <Box>
      <img src={badge.image_url_1x} alt={badge.title} />
      <Typography>{badge.title}</Typography>
    </Box>
  );
}
export default SubscribeBadges;
