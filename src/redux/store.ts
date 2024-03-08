import { configureStore, Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./types";
import { appReducer } from "./reducers/app-reducer";
import { userReducer, searchChannelReducer } from "./reducers/user-reducer";
import { sChannelReducer, userDetailReducer, topCategoryReducer, topStreamReducer, usersReducer, emoteReducer, badgesReducer } from "./api/slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    emote: emoteReducer,
    badges: badgesReducer,
    searchUsers: usersReducer,
    searchChannelState: searchChannelReducer,
    searchChannelDetail: sChannelReducer,
    userId: userDetailReducer,
    topCategory: topCategoryReducer,
    topStream: topStreamReducer,
  },
});

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;
