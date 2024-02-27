import { RootState } from "../../../redux/types";
import { useSelector } from "react-redux";
import ClosePanel from "./close-panel";
import OpenPanel from "./open-panel";

function LeftChannelList() {
  const visible = useSelector((state: RootState) => state.user.visibleLeftChannelPanel);
  if (!visible) {
    return <ClosePanel />;
  } else {
    return <OpenPanel />;
  }
}

export default LeftChannelList;
