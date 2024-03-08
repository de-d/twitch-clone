import { Box } from "@mui/material";
import { Emote } from "../../../../redux/types";

type SubEmoteProps = {
  emote: Emote;
};

function SubscribeEmote({ emote }: SubEmoteProps) {
  return (
    <Box>
      <img src={emote.images.url_1x} alt={emote.name} />
    </Box>
  );
}
export default SubscribeEmote;
