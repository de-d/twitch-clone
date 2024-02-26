import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setUserToken } from "../actions/user-action";
import { SearchTwitchChannel } from "../types";
import { setSearchChannelName, setSearchChannelInfo } from "../actions/channel-action";

const initialUserState = {
  token: "",
};

const userReducer = createReducer(initialUserState, (builder) => {
  builder.addCase(setUserToken, (state, action: PayloadAction<string>) => {
    state.token = action.payload;
  });
});

const initialSearchChannelState = {
  channelName: "",
  channelInfo: {} as SearchTwitchChannel,
};

const searchChannelReducer = createReducer(initialSearchChannelState, (builder) => {
  builder.addCase(setSearchChannelName, (state, action: PayloadAction<string>) => {
    state.channelName = action.payload;
  });
  builder.addCase(setSearchChannelInfo, (state, action: PayloadAction<SearchTwitchChannel>) => {
    state.channelInfo = action.payload;
  });
});

export { userReducer, searchChannelReducer };
