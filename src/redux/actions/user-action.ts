import { createAction } from "@reduxjs/toolkit";

export const setUserToken = createAction<string>("SET_USER_TOKEN");

export const setVisibleLeftChannelPanel = createAction<boolean>("SET_VISIBLE_LEFT_CHANNEL_PANEL");
