import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setUserToken, setVisibleLeftChannelPanel, saveFollowedChannels } from "../actions/user-action";
import { SearchTwitchChannel, TwitchUsersData } from "../types";
import { setSearchChannelName, setSearchChannelInfo } from "../actions/channel-action";

const initialUserState = {
  token: "",
  visibleLeftChannelPanel: false,
  followedChannels: [] as TwitchUsersData[],
};

const userReducer = createReducer(initialUserState, (builder) => {
  builder.addCase(setUserToken, (state, action: PayloadAction<string>) => {
    state.token = action.payload;
  });
  builder.addCase(setVisibleLeftChannelPanel, (state, action: PayloadAction<boolean>) => {
    state.visibleLeftChannelPanel = action.payload;
  });
  builder.addCase(saveFollowedChannels, (state, action: PayloadAction<TwitchUsersData[]>) => {
    state.followedChannels = action.payload;
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
