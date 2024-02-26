import { createAction } from "@reduxjs/toolkit";
import { SearchTwitchChannel } from "../types";

export const setSearchChannelName = createAction<string>("SET_SEARCH_CHANNEL_NAME");

export const setSearchChannelInfo = createAction<SearchTwitchChannel>("SET_SEARCH_CHANNEL_INFO");
