import { createAction } from "@reduxjs/toolkit";
import { TwitchUsersData } from "../types";

export const setUserToken = createAction<string>("SET_USER_TOKEN");

export const setVisibleLeftChannelPanel = createAction<boolean>("SET_VISIBLE_LEFT_CHANNEL_PANEL");

export const saveFollowedChannels = createAction<TwitchUsersData[]>("SAVE_FOLLOWED_CHANNELS");
